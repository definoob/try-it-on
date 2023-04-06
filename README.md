## Current Approach

In order to edit images properly, the app loads/converts remote images to base64 and save them to the database - [lowdb](https://github.com/typicode/lowdb)

## Known Issue

Writing 50 images into lowdb one by one is taking way too much at this point.

Possible solutions might include:

- Batch update (Cannot write 50 images at once as it exceeds the size limit so we need a new way of batching.)
- Another database, e.g. Firebase

## Good to know

When you request edit and save the result, you can see a small purple star at the top right corner of the image.
