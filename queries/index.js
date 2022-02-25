const param = `idx,subject,nickname,hit`
const date = `DATE_FORMAT(date, '%Y-%m-%d') AS date`
const timestamp = `DATE_FORMAT(date, '%Y-%m-%d %p %h:%i') AS date`


const SQL = {
    boardList : `SELECT ${param},${date} FROM boardData`,
    boardWrite : 'INSERT INTO boardData (subject, nickname, content) Values (?,?,?)',
    boardView : `SELECT ${param},${timestamp} FROM boardData WHERE idx = ?`,
    boardHit: 'UPDATE boardData SET hit = ? WHERE idx = ?',
    boardDelete : 'DELETE FROM boardData WHERE idx = ?',
    boardUpdate : 'UPDATE boardData SET subject=?, content=? WHERE idx = ?',
    //
    getAdminUserList: 'SELECT * FROM userAccount',
    getAdminUserOne: 'SELECT * FROM userAccount WHERE useridx=?',

    loginSql : `select * from userAccount where id = ? and pw = ?;`,
    profileCheck : `select * from userAccount where id = ?`,
    checkId : `select * from userAccount where id=? or nickname=? or phone=? or mobile=?`,
    addData : `insert into userAccount(id, pw, name, nickname, birth, gender, phone, mobile, userlevel) values(?,?, ?, ?,?, ?, ?, ?,3)`,
    setAdminUserUpdate:'UPDATE userAccount SET userlevel=?, name=?, mobile=?  WHERE id = ?',
    setAdminDeleteUser : 'DELETE FROM userAccount WHERE useridx = ?',
}



module.exports = SQL