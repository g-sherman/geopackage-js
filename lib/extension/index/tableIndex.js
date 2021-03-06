/**
 * TableIndexDao module.
 * @module extension/index
 */

var Dao = require('../../dao/dao')
  , TableCreator = require('../../db/tableCreator');

var util = require('util');

/**
 * Table Index object, for indexing data within user tables
 * @class TableIndex
 */
var TableIndex = function() {

  /**
   * Name of the table
   * @member {String}
   */
  this.table_name;

  /**
   * Last indexed date
   * @member {String}
   */
  this.last_indexed;
}

/**
 * Table Index Data Access Object
 * @class
 * @extends {module:dao/dao~Dao}
 * @param {module:geoPackage~GeoPackage}  geoPackage The GeoPackage object
 */
var TableIndexDao = function(geoPackage) {
  Dao.call(this, geoPackage);
};

util.inherits(TableIndexDao, Dao);

/**
 * Create a new TableIndex object
 * @return {module:extension/index~TableIndex}
 */
TableIndexDao.prototype.createObject = function() {
  return new TableIndex();
};

TableIndexDao.prototype.getGeometryIndices = function(tableIndex) {

};

TableIndexDao.prototype.getGeometryIndexCount = function(tableIndex) {

};

/**
 * Creates the tables necessary
 * @return {Promise}
 */
TableIndexDao.prototype.createTable = function() {
  var tc = new TableCreator(this.geoPackage);
  return tc.createTableIndex();
}


TableIndexDao.TABLE_NAME = "nga_table_index";
TableIndexDao.COLUMN_TABLE_NAME = "table_name";
TableIndexDao.COLUMN_LAST_INDEXED = "last_indexed";

TableIndexDao.prototype.gpkgTableName = TableIndexDao.TABLE_NAME;
TableIndexDao.prototype.idColumns = [TableIndexDao.COLUMN_TABLE_NAME];

module.exports.TableIndexDao = TableIndexDao;
module.exports.TableIndex = TableIndex;
