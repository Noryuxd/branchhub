const { Schema, models, model } = require("mongoose");

const EventSchema = new Schema(
  {
    type: String,
    page: String,
    uri: String,
  },
  { timestamps: true }
);

export const Event = models?.Event || model("Event", EventSchema);
