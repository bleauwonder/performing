import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
    imports: [MatButtonModule, MatCardModule, MatToolbarModule, MatIconModule, MatMenuModule, MatExpansionModule, MatAutocompleteModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatChipsModule, MatSelectModule, MatDialogModule],
    exports: [MatButtonModule, MatCardModule, MatToolbarModule, MatIconModule, MatMenuModule, MatExpansionModule, MatAutocompleteModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatChipsModule, MatSelectModule, MatDialogModule]
})

export class MaterialModule { }