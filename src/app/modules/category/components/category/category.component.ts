import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CategoryService } from 'src/app/modules/shared/services/category.service';
import { CategoryElement } from './category.model';
import { MatDialog } from '@angular/material/dialog';
import { NewCategoryComponent } from '../new-category/new-category.component';
import { MatPaginator, MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material';
import { ConfirmComponent } from 'src/app/modules/shared/components/confirm/confirm.component';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private categoryService: CategoryService, private dialog: MatDialog,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getCategories()
  }



  displayedColumns: string[] = ['id', 'name', 'description', 'actions'];
  dataSource = new MatTableDataSource<CategoryElement>()

  @ViewChild(MatPaginator, null)
  paginator: MatPaginator

  getCategories() {
    this.categoryService.getCategories()
      .subscribe((data: any) => {
        this.processCategoriesResponse(data)
      }, (error: any) => {
        console.log(error)
      })
  }



  processCategoriesResponse(resp: any) {
    const dataCategory: CategoryElement[] = []

    if (resp.metadata[0].code == "00") {
      let listCategory = resp.categoryResponse.category
      listCategory.forEach((element: CategoryElement) => {
        dataCategory.push(element)
      })
      this.dataSource = new MatTableDataSource<CategoryElement>(dataCategory)
      this.dataSource.paginator= this.paginator;
    }
  }
  openCategoryDialog() {
    const dialogRef = this.dialog.open(NewCategoryComponent, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result == 1) {
        this.openSnackBar("Categoria agregada", "Exitosa")
        this.getCategories()
      } else if (result == 2) {
        this.openSnackBar("Se produjo un error al guardar categoria", "Error")
      }
    });

  }

  openSnackBar(message: string, action: string): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(message, action, {
      duration: 2000
    })
  }

  edit(id: number, name: string, description: string){
    const dialogRef = this.dialog.open(NewCategoryComponent, {
      data: {id: id, name: name, description: description}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result == 1) {
        this.openSnackBar("Categoria Actualizada", "Exitosq")
        this.getCategories()
      } else if (result == 2) {
        this.openSnackBar("Se produjo un error al actualizar categoria", "Error")
      }
    });
  }

  delete(id: number){

    const dialogRef = this.dialog.open(ConfirmComponent , {
      data: {id: id}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result == 1) {
        this.openSnackBar("Categoria eliminada", "Exitosa")
        this.getCategories()
      } else if (result == 2) {
        this.openSnackBar("Se produjo un error al eliminar categoria", "Error")
      }
    });

  }

  buscar(termino: string){
    if(termino.length === 0){
      return this.getCategories()
    }
    this.categoryService.getCategoryById(termino)
          .subscribe(resp => {
            this.processCategoriesResponse(resp)
          })

  }
}

