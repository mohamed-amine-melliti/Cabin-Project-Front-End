import { relations, sql } from 'drizzle-orm'
import { date, integer, pgTable, text, timestamp, varchar } from 'drizzle-orm/pg-core'

export const user = pgTable('auth_users', {
  id: text('id').primaryKey(),
  name: text('name'),
  email: text('email').unique(),
  image: text('image').default('bdzdebalgjgnbsgevvkd.webp').notNull(),
  imagePublicId: text('image_public_id'),
  description: varchar('description', { length: 400 }),
  password: text('password'),
  emailVerified: timestamp('email_verified'),
  emailVerificationToken: text('email_verification_token'),
  emailVerificationTokenCreatedAt: timestamp('email_verification_token_created_at'),
  passwordResetToken: text('password_reset_token'),
  passwordResetTokenCreatedAt: timestamp('password_reset_token_created_at'),
  provider: text('provider').notNull(),
  githubId: text('github_id').unique(),
  googleId: text('google_id').unique(),
  favoriteIds: text('favorite_ids')
    .array()
    .notNull()
    .default(sql`ARRAY[]::text[]`),
  clientType: varchar('client_type', { length: 10 }), // e.g., 'client' or 'owner'
  
  // New subscription fields
  subscriptionType: varchar('subscription_type', { length: 20 }).default('basic'), // e.g., 'basic', 'premium', 'pro'

  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at')
    .notNull()
    .$onUpdate(() => new Date()),
});


export const sessionTable = pgTable('session', {
  id: text('id').primaryKey(),
  userId: text('user_id')
    .notNull()
    .references(() => user.id, { onDelete: 'cascade' }),
  expiresAt: timestamp('expires_at', {
    withTimezone: true,
    mode: 'date',
  }).notNull(),
})


export const listing = pgTable('listings', {
  id: text('id').primaryKey(),
  userId: text('user_id')
    .notNull()
    .references(() => user.id, { onDelete: 'cascade' }),

  title: text('title').notNull(),
  description: varchar('description', { length: 400 }).notNull(),
  imageSrc: text('image_src').notNull(),
  imagePublicId: text('image_public_id'),
  category: text('category').notNull(),

  // Original fields
  roomCount: integer('room_count').notNull(),
  bathroomCount: integer('bathroom_count').notNull(),
  guestCount: integer('guest_count').notNull(),
  locationValue: text('location_value').notNull(),
  price: integer('price').notNull(),

  // Additional fields
  cotAvailability: text('cot_availability'), // String field with nullable option
  ownersMessage: text('owners_message'),
  childrenAllowance: text('children_allowance'), // Enum but treated as text in DB
  cotAvailabilityChild: text('cot_availability_child'), // Enum but treated as text in DB
  checkInDate: text('check_in_date'),
  checkOutDate: text('check_out_date'),
  neighboringActivity: text('neighboring_activity'),
  eventsAllowance: text('events_allowance'), // Enum but stored as text

  numberOfRooms: integer('number_of_rooms'), // Required field for number of rooms
  squareMeterCount: integer('square_meter_count'), // Required field for square meters
  smokingAllowance: text('smoking_allowance'), // Enum but treated as text in DB
  propertyType: text('property_type'), // Enum for property type (Entire, Room, Shared)

  // New fields for selections
  PropertyAccessoriesSelected: text('property_accessories_selected'),
  PropertyGuidelinesSelected: text('property_guidelines_selected'),
  RoomInfoFormSelected: text('room_info_form_selected'),
  AccommodationSelectionSelected: text('accommodation_selection_selected'),
  RoomAmenitiesSelected: text('room_amenities_selected'),

  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').$onUpdate(() => new Date()),
});


export const reservation = pgTable('reservations', {
  id: text('id').primaryKey(),
  userId: text('user_id')
    .notNull()
    .references(() => user.id, { onDelete: 'cascade' }),
  listingId: text('listing_id')
    .notNull()
    .references(() => listing.id, { onDelete: 'cascade' }),
  totalPrice: integer('total_price').notNull(),
  startDate: date('start_date').notNull(),
  endDate: date('end_date').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
})

export const userRelations = relations(user, ({ many }) => ({
  listings: many(listing, {
    relationName: 'listings',
  }),
  reservations: many(reservation, {
    relationName: 'reservations',
  }),
}))

export const listingRelations = relations(listing, ({ one, many }) => ({
  auth_user: one(user, {
    fields: [listing.userId],
    references: [user.id],
    relationName: 'listings',
  }),
  reservations: many(reservation, {
    relationName: 'reservations',
  }),
}))

export const reservationRelations = relations(reservation, ({ one }) => ({
  auth_user: one(user, {
    fields: [reservation.userId],
    references: [user.id],
    relationName: 'auth_user',
  }),
  listing: one(listing, {
    fields: [reservation.listingId],
    references: [listing.id],
    relationName: 'reservations',
  }),
}))
