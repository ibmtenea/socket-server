import {Router, Request, Response} from 'express';
import Server from '../classes/server';


export const router = Router();

//metodo por GET
router.get('/mensajes', (req:Request, res:Response) =>{
    res.json({
        ok:true,
        mensaje: 'todo correcto'
    });
});

//metodo por POST a todos los usuarios desde el servicio REST ( POSTMAN )
//USAR para el log a tiempo real
router.post('/mensajes', (req:Request, res:Response) =>{

    const cuerpo = req.body.cuerpo;
    const de     = req.body.de;
    const payload = {
        de,
        cuerpo
    }
    const server = Server.instance;
    server.io.emit( 'mensaje-nuevo', payload );
    res.json({
        ok:true,
        cuerpo: cuerpo,
        de: de
        // mensaje: 'todo correcto pero en POST'
    });
});


//metodo por POST a un solo usuario ID
router.post('/mensajes/:id', (req:Request, res:Response) =>{

    const cuerpo = req.body.cuerpo;
    const de     = req.body.de;
    const id     = req.params.id;
    const payload = {
        de,
        cuerpo
    }
    const server = Server.instance;
    server.io.in( id  ).emit( 'mensaje-privado',payload );
    res.json({
        ok:true,
        cuerpo: cuerpo,
        de: de,
        id: id
        // mensaje: 'todo correcto pero en POST'
    });
});





export default router;