import { db } from '../firebase/firebase-config'
import {types} from '../types/types'
import Swal from 'sweetalert2'
import {load} from '../helpers/load';
import { FileUpload } from "../helpers/FileUpload";


//ENVIA LA IMAGEN A CLOUDINARY
export const startUploading = (file) => {

    let fileUrl=[];
    return async () => {

        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait ...',
            allowOutsideClick: false,
            onBeforeOpen: () => {
                Swal.showLoading()
            }
        })

        fileUrl = await FileUpload(file)
           
        // console.log(fileUrl);
        Swal.close()
       return fileUrl
    }
}

//Crear los datos
export const dogNew = (dogs) => {
    console.log(dogs)
    return async (dispatch) => {
      
        const newDog= {
            url: dogs.url,
            name: dogs.name,
            description: dogs.description
        }

        try {
           await db.collection(`/Dog`).doc().set(newDog)
            Swal.fire({
                position: 'top-end',
                text: 'Perro Creado',
                icon: 'success',
                title: dogs.name ,
                showConfirmButton: false,
                timer: 1500
              })
        } catch (e) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: e,
                footer: ''
              })
        }
        dispatch(addNewDogs(newDog))
        dispatch(Listar())

    }
}

export const addNewDogs = (dog ) => ({
    type: types.dogPost,
    payload: {
        ...dog
    }
})

//Listar los datos

export const ListarSearch = (searchText) => { 
    return async (dispatch) =>{
        const dogList =  await load(searchText);
        // console.log("dogList");
        // console.log(dogList);
        dispatch(setCards(dogList))
    }
}

export const Listar = () => {
    return async (dispatch) =>{
        const dogList =  await load();
        // console.log("dogList");
        // console.log(dogList);
        dispatch(setCards(dogList))
    }
}

export const setCards = (dog) => {
    return {
        type: types.dogGet,
        payload: dog
    }
}

//Borrar
export const Delete = (id) => {
    return async (dispatch) => {

        await db.doc(`Dog/${id}`).delete();
        dispatch(deleteDog(id));

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Delete',
            showConfirmButton: false,
            timer: 1500
          })
          dispatch(Listar())
    }
}

export const deleteDog= (id) => ({
    type: types.dogDelete,
    payload: id
});

//Editar
export const activeDog = (dog) => {
    return{
        type:types.dogActive,
        payload:{
            ...dog
        }
    }
}


export const Edit = (dog) => {
    return async (dispatch) => {
        
        console.log('perro',dog)
        if (!dog.url) {
            delete dog.url;
        }

        const Editdog = {
            url: dog.url,
            name: dog.name,
            description: dog.description
        }

        const dogFire = { ...Editdog  }
        delete dogFire.id

        console.log(dog.id)

        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait ...',
            allowOutsideClick: false,
            onBeforeOpen: () => {
                Swal.showLoading()
            }
        })
           console.log(dog.id)
           await db.doc(`/Dog/${dog.id}`).update(Editdog)
           
        Swal.fire('Saved', dog.name, 'success');
        dispatch(Listar())
        dispatch(clearCard())
    }
}

export const clearCard = () => {
    return {
        type: types.LogoutClean
    }
}

