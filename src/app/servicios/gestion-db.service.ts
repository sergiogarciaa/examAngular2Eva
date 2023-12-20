import { Injectable } from '@angular/core';
import { DocumentReference, Firestore, addDoc, collection, collectionData, deleteDoc, doc, docData, query, updateDoc, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class GestionDBService {

  coleccion: string = '';

  
  constructor (private afs : Firestore)
  {}

  /**
   * Obtiene una colección de documentos de Firestore.
   * @param coleccion - El nombre de la colección.
   * @returns Un `Observable` que emite un array de documentos de la colección.
   */
  getColeccion(coleccion: string): Observable<any[]> {
    const coleccionRef = collection(this.afs, coleccion);
    return collectionData(coleccionRef, { idField: 'id' }) as Observable<any[]>;
  }
  /**
   * Obtiene una colección de documentos de Firestore.
   * @param coleccion - El nombre de la colección.
   * @returns Un `Observable` que emite un array de documentos de la colección.
   */
  getSubcoleccion(coleccion: string, subcoleccion: string, docId: string){
    const docRef = collection(this.afs, `${coleccion}/${docId}/${subcoleccion}`);
    return collectionData(docRef, {idField: 'id'}) as Observable<any>;
  }

  /**
   * Obtiene un documento específico de Firestore.
   * @param id - El ID de la colección.
   * @param docId - El ID del documento.
   * @returns Un `Observable` que emite el documento específico.
   */
  getDocumento(id: string, docId: string): Observable<any> {
    const docRef = doc(this.afs, `${id}/${docId}`);
    return docData(docRef, {idField: 'id'}) as Observable<any>;
  }

  /**
   * Agrega un nuevo documento a una colección en Firestore.
   * @param coleccion - El nombre de la colección.
   * @param documento - El documento a agregar.
   * @returns Una promesa que se resuelve cuando se agrega el documento.
   * Si hay un error, se rechaza la promesa con el error correspondiente.
   */
  addDocumento(coleccion: string, documento: any): Promise<DocumentReference> {
    const coleccionRef = collection(this.afs, coleccion);
    return addDoc(coleccionRef, documento).catch(error => {
      console.error('Error al agregar el documento', error);
      throw error; // Propaga el error para que pueda ser manejado en la llamada del componente
    });
  }

  /**
   * Actualiza un documento existente en Firestore.
   * @param coleccion - El nombre de la colección.
   * @param documento - El documento actualizado.
   * @returns Una promesa que se resuelve cuando se actualiza el documento.
   */
  updateDocumento(coleccion: string, documento: any) {
    const docRef = doc(this.afs, `${coleccion}/${documento.id}`);
    return updateDoc(docRef, documento);
  }
  deleteDocumento(coleccion: string, docId: string){
    const documentRef = doc(this.afs, `${coleccion}/${docId}`);
    return deleteDoc(documentRef);
  }
  queryDocumento(coleccion: string, campo: string, valor: any){
    const collectionRef = collection(this.afs, coleccion);
    const queryRef = query(collectionRef, where(campo, '==', valor));
    return collectionData(queryRef, { idField: 'id'}) as Observable<any[]>;
  }
}
