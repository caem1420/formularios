import { Component, OnInit } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  nombreCompleto : any;
  cedula : any;
  id : any;
  fechaNacimiento : any;
  ocupacion : any;
  padreFamilia : boolean;
  email : any;
  eps : any; 
  arl : any;
  telFijo : any;
  celular : any;
  nombreProfesor : any;
  celularProfesor : any;
  constructor() { }


  ngOnInit() {
    console.log(pdfMake)
  }

  generarPdf() {
    // playground requires you to assign document definition to a variable called dd
    var dd = {
      content: [
        {
          text: 'FACULTAD DE CIENCIAS EMPRESARIALES - PROGRAMA ADMINISTRACIÓN DE EMPRESAS \n PRÁCTICA PROFESIONAL\n INSTRUMENTO DE ELABORACIÓN, SEGUIMIENTO Y EVALUACIÓN DEL PLAN DE FORMACIÓN',
          style: 'header'
        },

        {
          alignment: "justify",
          fontSize: 12,
          text: "\n \n Este instrumento debe ser diligenciado en su totalidad por el profesor que hace el seguimiento de la práctica profesional, en conjunto con el estudiante practicante y su jefe inmediato al inicio de la Práctica Profesional, para que sirva como guía en el desarrollar de las actividades en el escenario de práctica. \n \n"
        },
        {

          text: 'A. INFORMACIÓN DEL ESTUDIANTE',
          style: 'subheader'
        },
        {
          fontSize: 11,
          text: " \n NOMBRE COMPLETO DEL/LA ESTUDIANTE:       " + this.nombreCompleto + "\n" +
            " NUMERO DE CEDULA:         "+ this.cedula +" EDAD:________ ID:      " +this.id+ "\n" +
            "OCUPACION:     " + this.ocupacion +" MADRE O PADRE DE FAMILIA:     "+ (this.padreFamilia ? "SI X  No____": "Si____ No X") +" \n" +
            "CORREO ELECTRONICO: " + this.email+" EPS: "+ this.eps +"\n" +
            "TELEFONO FIJO: "+ this.telFijo +" TELEFONO MOVIL: " + this.celular+" ARL: "+ this.arl+" \n" +
            "NOMBRE DEL PROFESOR DE PRACTICAS: "+ this.nombreProfesor+" TEL: " + this.celularProfesor+ " \n  \n"
        },

        {

          text: 'B. INFORMACIÓN DEL ESCENARIO DE PRÁCTICA ',
          style: 'subheader'
        },
        {
          text: " \n NOMBRE DEL ESCENARIO DE PRÁCTICA: _____________________________________________________ \n" +
            "DIRECCIÓN: _______________________________________TELÉFONO_________________EXT_______ \n" +
            "NOMBRE DEL JEFE DIRECTO: _______________________________CARGO__________________________ \n" +
            "TELÉFONO DE CONTACTO: ________________CORREO ELECTRÓNICO: ___________________________ \n " +
            "HORARIO DE LA PRÁCTICA: DÍAS DE LA SEMANA: ___________________HORARIO: ____________ \n"
        }
      ],
      styles: {
        header: {
          alignment: "center",
          fontSize: 12,
          bold: true,
        },
        subheader: {
          fontSize: 12,
          bold: true
        },
        quote: {
          italics: true
        },
        small: {
          fontSize: 8
        }
      }

    }

    pdfMake.createPdf(dd).download();

  }

}
