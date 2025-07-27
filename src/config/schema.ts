import { date, integer, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const Users = pgTable("users", {
    id:varchar("Id", {length:50}).primaryKey(),
    name:varchar("Name", {length:50}).notNull(),
    email:varchar("Email", {length:50}).notNull(),
    password:varchar("Password", {length:150}).notNull(),
});

export const Bookings = pgTable("bookings", {
    id:serial("Id").primaryKey(),
    name:varchar("Name", {length:50}).notNull(),
    user:varchar().references(() => Users.id),
    date:date("Date").notNull(),
    startData:date("StartDate").notNull(),
    endData:date("EndDate").notNull(),
    price:integer("Price").notNull(),
    people: integer("People").notNull(),
    days: integer("Days").notNull(),
    placeList:varchar("PlaceList", {length:500}),
});

export const Taxis = pgTable("taxis", {
    id:serial("Id").primaryKey(),
    model:varchar("Model", {length:50}).notNull(),
    seats:integer("Seats").notNull(),
    vehicleNumber:varchar("VehicleNumber", {length:50}).notNull(),
    driver:varchar("Driver", {length:50}).notNull(),
    driverPhoneNumber: varchar("DriverPhoneNumber", {length:50}).notNull(), 
});

export const TaxiBooking = {
    id:serial("Id").primaryKey(),
    user:varchar().references(() => Users.id),
    taxi:varchar().references(() => Taxis.id),
    price:integer("Price").notNull(),
}

export const Queries = pgTable("queries", {
    id:serial("Id").primaryKey(),
    name:varchar("Name", {length:50}).notNull(),
    email:varchar("Email", {length:50}).notNull(),
    message:varchar("Message", {length:50}).notNull(),
});
