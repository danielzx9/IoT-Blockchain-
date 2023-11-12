import { Injectable, inject } from '@angular/core';
import {
  updateDoc, deleteDoc, Firestore, collection, addDoc, getDoc,
  CollectionReference, DocumentReference, query, getDocs, DocumentData, doc
}
  from '@angular/fire/firestore';
import { Seguimiento } from '../seguimiento';
import { Observable, of } from 'rxjs';
import { map, take } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SeguimientoService {

  public firestore: Firestore = inject(Firestore);
  listaseguimiento!: DocumentData[];
  seguimientosCollection: CollectionReference;



  constructor() {
    this.seguimientosCollection = collection(this.firestore, 'seguimientos');
  }

  async crearNuevo(seguimiento: Seguimiento): Promise<DocumentReference> {
    let documentReference1: DocumentReference;
    documentReference1 = await addDoc(this.seguimientosCollection, seguimiento);
    return documentReference1;
  }



  async getSeguimientos(): Promise<Observable<Seguimiento[]>> {
    let seguimientos = Array();
    (await getDocs(query(collection(this.firestore, 'seguimientos')))).docs.map((seguimiento) => {
      const data = seguimiento.data();
      data["id"] = seguimiento.id;
      seguimientos.push(data);
    });

    return of(seguimientos as Seguimiento[]);
  }





  borrarSeguimiento(id: any) {
    let seguimientoRef: DocumentReference;
    seguimientoRef = doc(this.firestore, "seguimientos", id);
    deleteDoc(seguimientoRef).then(() => {
      console.log("seguimiento eliminado:" + id);
    }).catch(err => {
      console.log(err);
    });
  }

  async getSeguimientoById(id: string): Promise<Observable<Seguimiento | undefined>> {
    let seguimiento: Seguimiento;
    const docRef = doc(this.firestore, "seguimientos", id);
    const docSnap = (await getDoc(docRef));
    seguimiento = docSnap.data() as Seguimiento;
    console.log(docSnap.data());
    return of(seguimiento);
  }

  async editarSeguimiento(seguimiento: Seguimiento, id: any): Promise<void> {
    let seguimientoRef: DocumentReference;
    seguimientoRef = doc(this.firestore, "seguimientos", id);
    await updateDoc(seguimientoRef, {
      fecha: seguimiento.fecha,
      peso: seguimiento.peso,
      altura: seguimiento.altura,

    }).then(() => {
      console.log("seguimiento actualizado:" + id);
    }).catch(err => {
      console.log(err);
    });
  }
}
