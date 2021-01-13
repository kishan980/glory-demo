const express = require("express");
const employeeController = require("./../controller/employeeController");
const appConfig = require('./../config/appConfig');
const uploadMulter = require('../middleware/upload');
const validation = require('../middleware/validation');
 
const swaggerJSDoc=require('swagger-jsdoc')
const app = express();
const swaggerUI=require('swagger-ui-express')
const options = {
    definition:{
      info:{
        title:'Swagger Task API',
        version:'1.0.0',
        description:''
      },
    },
    apis:['./routes/*.js']
    // apis:['index.js']
  }
let setRouter = (app) =>{

	let baseUrl = appConfig.apiVersion+'/employee';
	const swaggerSpec = swaggerJSDoc(options)
	app.use(baseUrl+'/api/doc', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
/**
 * @swagger
 * /api/v1/employee/getAllEmployee:
 *   get:
 *     tags:
 *       - Employee
 *     description: Returns all Employee
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of Employee
 *         schema:
 *           $ref: '#/definitions/getAllEmployee'
 */
	app.get(baseUrl+'/getAllEmployee', employeeController.getAllEmployee);

/**
 * @swagger
 * /api/v1/employee/{employeeJoinDate}/getByJoinDateEmployee:
 *   get:
 *     tags:
 *       - Employee
 *     description: Returns a single Employee
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: employeeJoinDate
 *         description: employeeJoinDate
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: A single Employee
 *         schema:
 *           $ref: '#/definitions/:employeeId/EmployeeId'
 */
	app.get(baseUrl+'/:employeeJoinDate/getByJoinDateEmployee', employeeController.getByJoinDateEmployee);

/**
 * @swagger
 * /api/v1/employee/createEmployee:
 *   post:
 *     tags:
 *       - Employee
 *     description: Creates a new employee
 *     summary: Uploads a file.
 *     consumes:
 *       - multipart/form-data
 *     parameters:
 *       - name: employeeName
 *         description: EmployeeName
 *         in: body
 *         required: true
 *       - name: employeePhoto
 *         in: formData   
 *         description: employeePhoto
 *         required: true
 *         type: file    
 *         schema:
 *           $ref: '#/definitions/createEmployee'
 *     responses:
 *       200:
 *         description: Successfully created
 */

    app.post(baseUrl+'/createEmployee', uploadMulter,validation, employeeController.employeeFunction);
/**
 * @swagger
 * /api/v1/employee/{employeeId}/delete:
 *   post:
 *     tags:
 *       - Employee
 *     description: Deletes a single Employee
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: employeeId
 *         description: employeeId
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Successfully employee deleted
 */
    
    app.post(baseUrl+'/:employeeId/delete', employeeController.deleteEmployee);

    /**
 * @swagger
 * /api/v1/employee/{employeeId}/details:
 *   get:
 *     tags:
 *       - Employee
 *     description: Returns a single Employee
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: employeeId
 *         description: employeeId single Details find found
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: A single Employee
 *         schema:
 *           $ref: '#/definitions/:employeeId/EmployeeId'
 */


    // params: employeeId.
	app.get(baseUrl+'/:employeeId/details',  employeeController.getSingleEmployee);

/**
 @swagger     
 *  /api/v1/employee/{employeeId}/edit:  
 *    put:   
 *      tags:    
 *        - Employee     
 *      description: Updates a single Employee 
 *      produces:    
 *        - application/json     
 *      parameters:  
 *        - name: employeeFristName   
 *          description: employeeFristName object resources   
 *          in: body     
 *          required: true   
 *          schema:  
 *            $ref: '#/components/schemas/edit'  
 *        - name: employeeId     
 *          description: employee Object ID  
 *          in: path     
 *          required: true   
 *      responses:   
 *        200:   
 *          description: Successfully Edit Employee  
 *        500:   
 *          description: Server error
 * */
  app.put(baseUrl+"/:employeeId/edit",uploadMulter,validation, employeeController.editEmployee);

/**
 @swagger     
 *  /api/v1/employee/employeeFormToDate:  
 *    get:   
 *      tags:    
 *        - Employee     
 *      description: EmployeeDate Of Join All Detail Find 
 *      produces:    
 *        - application/json     
 *      parameters:  
 *        - name: employeeJoinDate     
 *          description: employee Object Of All Data Range form  
 *          in: path     
 *          required: true   
 *      responses:   
 *        200:   
 *          description: Successfully Edit Employee  
 *        500:   
 *          description: Server error
 * */

  app.get(baseUrl+"/employeeFormToDate", employeeController.employeeFormToDate);
    

}

module.exports ={
    setRouter: setRouter
}