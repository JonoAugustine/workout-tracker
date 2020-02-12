const { connect } = require("mongoose");

const dbConnect = async () => {
  try {
    const {
      connection: {
        host,
        db: { databaseName }
      }
    } = await connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });

    console.log(`MONGO: ${host} @ ${databaseName}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = { dbConnect };
