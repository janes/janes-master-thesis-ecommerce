DBQuery.shellBatchSize = 50000

db.getCollection('product').find( ).forEach(function (doc) {
     
     var imagesfix = [];
     for (var x = 0 ; x < doc.Images.length; x++){
        var image = doc.Images[x]
        image.url = image.ImageUrl
        image.productId = doc._id
        image.disabled = false
        image._id = NumberInt(image.FileId)
        imagesfix.push(image)  
      
     }
     doc.images = imagesfix;
     doc.date_added = new Date();
     doc.date_modified = new Date();
     doc.ean =  doc.AlternateIds.Ean;
     doc.title = doc.ProductName;
     doc.description = doc.ProductDescription;
     doc.brand_name = doc.BrandName;
     doc.brand_id = doc.BrandId;
     doc.image = doc.ImageUrl;
     doc.categories = doc.ProductCategoryIds;
     
     db.getCollection('product').save(doc)
 });