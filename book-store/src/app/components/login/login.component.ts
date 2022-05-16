import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { TransferDataService } from 'src/app/service/transfer-data.service';
import { validator } from '../../../helper/customValidators';

interface inputModel {
  name: string
  type: string
  placeholder: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})

export class LoginComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private dataService: TransferDataService) {}
  form: FormGroup;
  isOpen: boolean = false

  dataUsers = []

  inputsData: Array<inputModel> = [
    {
      name: 'name',
      type: 'text',
      placeholder: 'Type Name'
    },
    {
      name: 'age',
      type: 'number',
      placeholder: 'Please type subject`s Age'
    },
    {
      name: 'email',
      type: 'email',
      placeholder: 'Dont forget about email'
    },
  ]

  initializeForm() {
    this.form = this.formBuilder.group({
      name: ['', {
        validators: [ validator.required, validator.minLength(4)],
        updateOn: 'change'
      }],
      age: new FormControl('', [ validator.required, validator.min(16)]),
      email: new FormControl('', [ validator.required, validator.mail() ]),
    })
  }

  onSubmit() {
    if (this.form.valid) {
      const data = {...this.form.value}
      this.dataUsers.unshift(data)
      const initialData = this.inputsData.reduce((acum, obj) => {
        if (!acum?.[obj.name]) {
          acum[obj.name] = ''
        }
        return acum
      }, {})
      this.form.reset(initialData)
    }
  }

  ngOnInit(): void {
    this.initializeForm()
    this.dataService.loginSubject.subscribe(login => this.isOpen = Boolean(login.length))
  }
}
