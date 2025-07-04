
const searchForTopLevelSubjects = async (connection) => {
    if(!connection) {
        throw new Error('Database connection not provided for searchForTopLevelSubjects query.');

    }
    try {
       const [rows] = await connection.execute('SELECT * FROM subjects WHERE parent_subject_id IS NULL');
       return rows;
    } catch (error){
        console.error("Error with SQL query at database level", error)
        throw error
    }
};

module.exports = {searchForTopLevelSubjects}