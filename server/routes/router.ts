import {Router, Request, Response} from 'express';


export const router = Router();

//metodo por GET
router.get('/mensajes', (req:Request, res:Response) =>{
    res.json({
        ok:true,
        mensaje: 'todo correcto'
    });
});

//metodo por POST
router.post('/mensajes', (req:Request, res:Response) =>{

    const cuerpo = req.body.cuerpo;
    const de     = req.body.de;

    res.json({
        ok:true,
        cuerpo: cuerpo,
        de: de
        // mensaje: 'todo correcto pero en POST'
    });
});


//metodo por POST
router.post('/mensajes/:id', (req:Request, res:Response) =>{

    const cuerpo = req.body.cuerpo;
    const de     = req.body.de;
    const id = req.params.id;
    res.json({
        ok:true,
        cuerpo: cuerpo,
        de: de,
        id: id
        // mensaje: 'todo correcto pero en POST'
    });
});


export default router;