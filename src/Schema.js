const { ObjectId } = require("@fastify/mongodb")

;(users = {
  id: ObjectId,
  user_name: String,
  email: String,
  password: String,
}),
  //--------------------------------------------------

  (profiles = {
    id: ObjectId,
    national_id: Number,
    nationality: [String],
    first_Name: String,
    last_Name: String,
    blood_type: [String],
    date_birth: Date,
    place_birth: String,
    marital_status: String,
    photo: URL,
    IdentificationDecument_id: {
      type: ObjectId,
    },
    user_id: {
      type: ObjectId,
    },
  }),
  //--------------------------------------------------

  (Services = {
    id: ObjectId,
    Service_title: String,
    Service_type: [String],
    profiles_id: {
      type: mongoose.ObjectId,
    },
  }),
  //------------------------------------------------------

  (digitalWallet = {
    id: ObjectId,

    IdentificationDecument_id: {
      type: ObjectId,
    },

    EducationDecument: {
      type: ObjectId,
    },

    VehicleDocuments: {
      type: ObjectId,
    },
  }),
  //-------------------------------------------------

  (IdentificationDecument = {
    id: ObjectId,
    Release_Date: Date,
    Expire_Date: Date,
  })

//-----------------------------------------------

EducationDecument = {
  id: ObjectId,
  student_id: Number,
  student_name: String,
  student_email: String,
  mejor: String,
}

//---------------------------------------------------

VehicleDocuments = {
  id: ObjectId,
  Release_Date: Date,
  Expire_Date: Date,
  Document_Type: [String],
  mejor: String,
  limitations: String,
}

// -------------------------------------------

Homepage = {
  id: ObjectId,

  IdentificationDecument_id: {
    type: ObjectId,
  },

  prominentServices: [String],

  Services_id: {
    type: ObjectId,
  },

  digitalWallet_id: {
    type: ObjectId,
  },
}
//--------------------------------------------

DataPanel = {
  id: ObjectId,
  Data_title: String,
  Data_type: [String],
  DAta_aftar: [String],
  profiles_id: {
    type: mongoose.ObjectId,
  },
}

//---------------------------

ViewMore = {
  id: ObjectId,
  commonQuestions: String,
}
