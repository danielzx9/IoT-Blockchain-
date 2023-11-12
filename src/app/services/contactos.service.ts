import { Injectable, inject } from '@angular/core';
import {
  updateDoc, deleteDoc, Firestore, collection, addDoc, getDoc,
  CollectionReference, DocumentReference, query, getDocs, DocumentData, doc
}
  from '@angular/fire/firestore';
import { Contacto } from '../contacto';
import { Observable, of } from 'rxjs';
import { map, take } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  public firestore: Firestore = inject(Firestore);
  listacontactos!: DocumentData[];
  contactosCollection: CollectionReference;
  fechaSeleccionada: string = '';


  constructor() {
    this.contactosCollection = collection(this.firestore, 'contactos');
  }

  async crearNuevo(contacto: Contacto): Promise<DocumentReference> {
    let documentReference1: DocumentReference;
    documentReference1 = await addDoc(this.contactosCollection, contacto);
    return documentReference1;
  }

  setFechaSeleccionada(fecha: string) {
    this.fechaSeleccionada = fecha;
  }

  async getContactos(): Promise<Observable<Contacto[]>> {
    let contactos = Array();
    (await getDocs(query(collection(this.firestore, 'contactos')))).docs.map((contacto) => {
      const data = contacto.data();
      data["id"] = contacto.id;
      contactos.push(data);
    });

    return of(contactos as Contacto[]);
  }





  borrarContacto(id: any) {
    let contactoRef: DocumentReference;
    contactoRef = doc(this.firestore, "contactos", id);
    deleteDoc(contactoRef).then(() => {
      console.log("contacto eliminado:" + id);
    }).catch(err => {
      console.log(err);
    });
  }

  async getContactoById(id: string): Promise<Observable<Contacto | undefined>> {
    let contacto: Contacto;
    const docRef = doc(this.firestore, "contactos", id);
    const docSnap = (await getDoc(docRef));
    contacto = docSnap.data() as Contacto;
    console.log(docSnap.data());
    return of(contacto);
  }

  async editarContacto(contacto: Contacto, id: any): Promise<void> {
    let contactoRef: DocumentReference;
    contactoRef = doc(this.firestore, "contactos", id);
    await updateDoc(contactoRef, {
      nombre: contacto.fecha,
      apellido: contacto.nombre,
      empresa: contacto.peso,
      telefono: contacto.repeticiones,
      correo: contacto.nota
    }).then(() => {
      console.log("contacto actualizado:" + id);
    }).catch(err => {
      console.log(err);
    });
  }
}
