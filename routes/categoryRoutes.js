const express = require("express");
const categoryController = require("./../controller/categoryController");
const appConfing = require("./../config/appConfig");
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

    let basetUrl = appConfing.apiVersion+'/category';
    const swaggerSpec = swaggerJSDoc(options)
	app.use(basetUrl+'/api/doc', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
/**
 * @swagger
 * /api/v1/category/getAllCategory:
 *   get:
 *     tags:
 *       - Category
 *     description: Returns all Category
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of Category
 *         schema:
 *           $ref: '#/definitions/getAllCategory'
 */
    app.get(basetUrl+'/getAllCategory', categoryController.getAllCategory);
    /**
 * @swagger
 * /api/v1/category/{categoryId}/getSingleCategory:
 *   get:
 *     tags:
 *       - Category
 *     description: Returns a single Catgeory
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: categoryId
 *         description: categoryId single Details find found
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: A single category
 *         schema:
 *           $ref: '#/definitions/:categoryId/getSingleCategory'
 */
    app.get(basetUrl+'/:categoryId/getSingleCategory', categoryController.getSingleCategory);
    /**
 * @swagger
 * /api/v1/category/{categoryId}/delete:
 *   post:
 *     tags:
 *       - Category
 *     description: Deletes a single Category
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: categoryId
 *         description: categoryId
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Successfully categoryId deleted
 */
    
    app.post(basetUrl+'/:categoryId/delete', categoryController.deleteCatgeory);
    	/**
 @swagger     
 *  /api/v1/category/{categoryId}/editCategory:  
 *    put:   
 *      tags:    
 *        - Category     
 *      description: Updates a single  Category 
 *      produces:    
 *        - application/json     
 *      parameters:  
 *        - name: categoryName   
 *          description: categoryName object resources   
 *          in: body     
 *          required: true   
 *          schema:  
 *            $ref: '#/components/schemas/editCategory'  
 *        - name: categoryId     
 *          description: Catgeory Object ID  
 *          in: path     
 *          required: true   
 *      responses:   
 *        200:   
 *          description: Successfully Edit category  
 *        500:   
 *          description: Server error
 * */

    app.put(basetUrl+'/:categoryId/editCategory', categoryController.editCategory);
/**
 * @swagger
 * /api/v1/category/createdCategory:
 *   post:
 *     tags:
 *       - Category
 *     description: Creates a new Category
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: categoryId
 *         description: category object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/createdCategory'
 *     responses:
 *       200:
 *         description: Successfully created
 */

    app.post(basetUrl+'/createdCategory',categoryController.categoryFunction);

    /**
 * @swagger
 * /api/v1/category/{date}/getDateCategory:
 *   get:
 *     tags:
 *       - Category
 *     description: Returns a date wish data Catgeory
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: date
 *         description:  Date Details find found catgeory
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: A single category
 *         schema:
 *           $ref: '#/definitions/:date/getDateCategory'
 */
    app.get(basetUrl+'/:date/getDateCategory', categoryController.getDateCategory)
}

module.exports ={
    setRouter:setRouter
}