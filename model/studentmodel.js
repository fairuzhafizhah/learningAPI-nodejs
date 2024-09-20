//second

const { student } = require("../config/database.js");

exports.readAllstu = async () => {
  try {
    console.log("Fetching all student data...");
    const todoo = await student.findAll();
    console.log("Data fetched:", todoo);
    return todoo;
  } catch (error) {
    console.error("Error fetching all student data:", error);
    throw new Error("Error fetching all student data: " + error.message);
  }
};

exports.readStu = async (id) => {
  try {
    return await student.findOne({
      where: {
        id: id,
      },
    });
  } catch (error) {
    console.error("Error fetching student data:", error);
    throw new Error("Error fetching student data: " + error.message);
  }
};

exports.createStu = async (data) => {
  try {
    return await student.create(data);
  } catch (error) {
    console.error("Error creating student data:", error);
    throw new Error("Error creating student data: " + error.message);
  }
};

exports.updateStu = async (id, data) => {
  try {
    const [updated] = await student.update(data, {
      where: {
        id: id,
      },
    });
    return updated;
  } catch (error) {
    console.error("Error updating student data:", error);
    throw new Error("Error updating student data: " + error.message);
  }
};

exports.deleteStu = async (id) => {
  try {
    const deleted = await student.destroy({
      where: {
        id: id,
      },
    });
    return deleted;
  } catch (error) {
    console.error("Error deleting student data:", error);
    throw new Error("Error deleting student data: " + error.message);
  }
};