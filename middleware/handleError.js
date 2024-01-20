import {generalError} from '../Utils/error.js'

const handleError = (err, req, res, next) => {
     if (err instanceof generalError) {
         const code = err.getCode()
         return res.status(code).json({name:err.name,message:err.message})
    }
    return res.status(500).json({name:"internal sever error", message:err.message})
 }

 export default handleError