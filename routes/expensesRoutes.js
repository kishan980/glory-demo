const express = require("express");
const expensesControllerl = require("./../controller/expensesController");
const appConfig           = require("./../config/appConfig");

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
    let baseUrl = appConfig.apiVersion+'/expenses';
    const swaggerSpec = swaggerJSDoc(options)
    app.use(baseUrl+'/api/doc', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
    /**
     * @swagger
     * /api/v1/expenses/all:
     *   get:
     *     tags:
     *       - Expenses
     *     description: Returns all Category
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: An array of Expenses
     *         schema:
     *           $ref: '#/definitions/getAllExpense'
     */
    
    app.get(baseUrl+'/all', expensesControllerl.getAllExpense);
    
/**
 * @swagger
 * /api/v1/expenses/{expensesId}/viewById:
 *   get:
 *     tags:
 *       - Expenses
 *     description: Returns a single Expenses
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: expensesId
 *         description: expensesId single Details find 
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: A single Expenses
 *         schema:
 *           $ref: '#/definitions/:expensesId/viewById'
 */

    app.get(baseUrl+'/:expensesId/viewById', expensesControllerl.getSingleExpenseViewById);

/**
 * @swagger
 * /api/v1/expenses/{expensesId}/delete:
 *   post:
 *     tags:
 *       - Expenses
 *     description: Deletes a single Expenses
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: expensesId
 *         description: expensesId
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Successfully Expenses deleted
 */
    
    app.post(baseUrl+'/:expensesId/delete', expensesControllerl.deleteExpenses);
/**
 @swagger     
 *  /api/v1/expenses/{expensesId}/expensesEdit:  
 *    put:   
 *      tags:    
 *        - Expenses     
 *      description: Updates a single Expenses 
 *      produces:    
 *        - application/json     
 *      parameters:  
 *        - name: expensesId   
 *          description: category object resources   
 *          in: body     
 *          required: true   
 *          schema:  
 *            $ref: '#/components/schemas/expensesEdit'  
 *        - name: expensesId     
 *          description: Expenses Object ID  
 *          in: path     
 *          required: true   
 *      responses:   
 *        200:   
 *          description: Successfully Edit Expenses  
 *        500:   
 *          description: Server error
 * */

    
    app.put(baseUrl+'/:expensesId/expensesEdit', expensesControllerl.expensesEdit);
    
/**
 * @swagger
 * /api/v1/expenses/create:
 *   post:
 *     tags:
 *       - Expenses
 *     description: Creates a new Expenses
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: expensesId
 *         description: Expenses object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/create'
 *     responses:
 *       200:
 *         description: Successfully create
 */
    app.post(baseUrl+'/create', expensesControllerl.expensesFunction);
    /**
 * @swagger
 * /api/v1/expenses/getViewCategory/{category}:
 *   get:
 *     tags:
 *       - Expenses
 *     description: Returns a single Expenses CategoryWish Details
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: category
 *         description: category single Details find 
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: A single Expenses
 *         schema:
 *           $ref: '#/definitions/getViewCategory/:category'
 */
    app.get(baseUrl+'/getViewCategory/:category', expensesControllerl.getViewCategory);

/**
 * @swagger
 * /api/v1/expenses/getViewDate/{date}:
 *   get:
 *     tags:
 *       - Expenses
 *     description: Returns a single Expenses dateWish Details
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: date
 *         description: Date single Details find 
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: A single Expenses
 *         schema:
 *           $ref: '#/definitions/getViewDate/:date'
 */
    app.get(baseUrl+'/getViewDate/:date', expensesControllerl.getViewDate);
    /**
 @swagger     
 *  /api/v1/expenses/{date}/getViewByDateExpense:  
 *    get:   
 *      tags:    
 *        - Expenses     
 *      description:  Expenses Of Join All Detail Find 
 *      produces:    
 *        - application/json     
 *      parameters:  
 *        - name: date     
 *          description: expeses Object Of All Data Range form  
 *          in: path     
 *          required: true   
 *      responses:   
 *        200:   
 *          description: Successfully Edit expeses  
 *        500:   
 *          description: Server error
 * */

    app.get(baseUrl+'/:date/getViewByDateExpense', expensesControllerl.getViewByDateExpense)
}
module.exports = {
    setRouter:setRouter
}