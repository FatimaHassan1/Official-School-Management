const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");

const testimonialSchem = mongoose.Schema({
    testithai : String ,
    testieng : String ,
    testiupdate : Date ,
})

autoIncrement.initialize(mongoose.connection);
testimonialSchem.plugin(autoIncrement.plugin, 'TestimonialModel')

const TestimonialModel = mongoose.model("Testimonial Database" , testimonialSchem);

module.exports = TestimonialModel;