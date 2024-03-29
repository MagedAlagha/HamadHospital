import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  retry,
  startWith,
  switchMap,
  tap,
  throttle,
  throttleTime,
} from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  FormsModule,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { AutoCompleteFeildService } from './auto-complete-feild.service';
import { Observable, of, Subscription } from 'rxjs';
import { MessageService } from 'primeng/api';

@Component({
  standalone: true,
  imports: [CommonModule, AutoCompleteModule, ReactiveFormsModule],
  selector: 'app-auto-complete-feild',
  templateUrl: './auto-complete-feild.component.html',
  styleUrls: ['./auto-complete-feild.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AutoCompleteFeildComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: AutoCompleteFeildComponent,
      multi: true,
    },
  ],
})
export class AutoCompleteFeildComponent
  implements OnInit, OnDestroy, ControlValueAccessor
{
  @Input() submitted: boolean = false;
  @Input() isLabel: boolean = true;
  @Input() field: string = 'Name';
  @Input() label: string = 'ID';
  @Input() deleteAfterSelect: boolean = false;
  @Input() tableName: string = '';
  disabled: boolean = false;
  required: boolean = false;
  @Input() hr: boolean = false;
  @Input() KG: boolean = false;
  @Input() isCustomSearch: boolean = false;
  @Input() ConfigCustomSearch: {
    api: string;
    keySearch?: any;
    customParams?: any;
    UrlEndPoint?: any;
  } = { api: '' };

  @Input() searchByThisValueWhenStart: any = null;
  @Output() onSelectionChange = new EventEmitter();
  Filter$: Observable<any> = of([]);
  valueChangesSubscription!: Subscription;
  constructor(
    private _autoCompleteFeildService: AutoCompleteFeildService,
    private messageService: MessageService
  ) {}
  onChange: any = () => {};
  onTouch: any = () => {};
  autoCompleteControl = new FormControl();
  set value(val: any) {
    this.onChange(val);
    this.onTouch(val);
  }

  writeValue(value: any) {
    this.autoCompleteControl.setValue(value);
    if (!value && value != 0) {
      this.autoCompleteControl.reset();
    }
  }
  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    Object.keys(control.errors! || {}).forEach((key) => {
      if (key == 'required') {
        this.required = true;
        this.autoCompleteControl.setValidators(Validators.required);
      }
    });
    return null;
  }
  setDisabledState(isDisabled: boolean) {
    if (isDisabled) {
      this.autoCompleteControl.disable();
    } else {
      this.autoCompleteControl.enable();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['submitted']) {
      if (this.submitted && this.autoCompleteControl.invalid) {
        this.messageService.add({
          severity: 'error',
          summary: '',
          detail: '',
        });
      }
    }
  }

  ngOnInit() {
    this.valueChangesSubscription =
      this.autoCompleteControl.valueChanges.subscribe((value) => {
        this.onChange(value);
      });

    this.filter();
  }

  ngOnDestroy() {
    this.valueChangesSubscription.unsubscribe();
  }

  filter() {
    this.Filter$ = this.autoCompleteControl.valueChanges.pipe(
      startWith(this.searchByThisValueWhenStart),
      filter((search) => typeof search == 'string'),
      tap((_) => {
        this.value = null;
      }),
      map((search) => search.trim()),
      debounceTime(200),
      // throttleTime(),
      distinctUntilChanged(),
      filter((search) => search !== ''),
      switchMap((search) => {
        return this.isCustomSearch
          ? this._autoCompleteFeildService
              .searchCustom(
                this.ConfigCustomSearch?.api,
                search,
                this.ConfigCustomSearch?.keySearch,
                this.ConfigCustomSearch?.customParams,
                this.ConfigCustomSearch?.UrlEndPoint
              )
              .pipe(catchError(value=>{
                return of([])
              }), startWith([]),)
          : this._autoCompleteFeildService.search(this.tableName, search).pipe(
              retry(3),
              startWith([]),
              map((value: any) => {
                return value[this.tableName];
              }),
              tap((value) => {
                //   if (
                //       this.searchByThisValueWhenStart &&
                //       value
                //   ) {
                //       this.onSelect(value[0]);
                //   }
              })
            );
      }),
      tap((value) => {
        console.log('valuetttt', value);
      })
    );
  }

  onSelect(value: any) {
    this.value = value;
    this.onSelectionChange.emit(value);
    if (this.deleteAfterSelect) {
      this.autoCompleteControl.reset();
    }
  }
  test() {}
}
