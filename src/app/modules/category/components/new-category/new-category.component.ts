import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { CategoryService } from 'src/app/modules/shared/services/category.service';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.css']
})
export class NewCategoryComponent implements OnInit {

  categoryForm: FormGroup;

  constructor(private fb: FormBuilder, private categoryService: CategoryService,
    private dialogoRef: MatDialogRef<NewCategoryComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {

      console.log('console')
      console.log(data)

    this.categoryForm = this.fb.group({
      id: [0],
      name: ['', Validators.required],
      description: ['', Validators.required]
    })

    if (data != null) {
      this.updateForm(data)
    }
  }

  ngOnInit() {
  }

  onSave() {

    let data = {
      id: this.categoryForm.get('id').value,
      name: this.categoryForm.get('name').value,
      description: this.categoryForm.get('description').value
    }
    

    if(data.id != 0){
    }else {
    }
    console.log('data')
    console.log(data)

    this.categoryService.saveCategorie(data)
      .subscribe(data => {
        console.log(data)
        this.dialogoRef.close(1)
      }, error => {
        this.dialogoRef.close(2)
      })
  }

  onCancel() {
    this.dialogoRef.close(3)
  }

  updateForm(data: any) {
    this.categoryForm = this.fb.group({
      id: [data.id],
      name: [data.name, Validators.required],
      description: [data.description, Validators.required]
    })
  }
}
