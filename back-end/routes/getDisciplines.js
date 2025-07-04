// Search for top level subjects 'disciplines' (those with no parent subject) for home page
const express = require('express');

const {searchForTopLevelSubjects} = require("../util/topLevelSubjectsQuery.js");


module.exports = (dbPool) => {

    const router = express.Router();

    router.get('/', async (req, res) => {
        let connection;
        try {
            connection = await dbPool.getConnection();

            //no argument just searches for all top level subjects (disciplines) 
            // passes dbPool 'connection' to query
            const disciplines = await searchForTopLevelSubjects(connection);

            res.json(disciplines);

        } catch (error) {
            console.error("Error searching for disciplines:", error);
            res.status(500).json({message:"An error occurred while searching for 'Disciplines' - top level subjects.", error: error.message});
        } finally {
            if (connection) connection.release();
            console.log('Database connection released for disciplines route.')
        }
    });






return router;
};
