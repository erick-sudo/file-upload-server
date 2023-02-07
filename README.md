# Uploading  Files to an Express Server

This project provides the code necessary to upload a file from an input form element of type **"file"** to an Express Server.

## Step 1: Creating the Form

Create a form element with the input element of type **"file"**
i.e.

```
    <form method="POST" action="/files" enctype="multipart/form-data">
        <label for="pics">Choose file to upload</label>
        <input name="firstname" type="text" placeholder="Firstname" />
        <input name="lastname" type="text" placeholder="Lastname" />
        <input name="email" type="email" placeholder="Email" />
        <input   type="file" id="pics" name="myfiles" multiple accept="image/*" />
        <input type="submit" value="Upload" />
    </form>
```

**NB**
The form must include the ```enctype="multipart/form-data"``` attribute to accomplish sending files to the server.
```input``` fields of type field should also include the multiple attribute incases of sending more than one file to the server. You should also include the ```accept="<filetype>"``` attribute to limit the type of  files a user should choose for sending to the server.

## Step 2: Receiving multipart form data using Express (nodejs)

NPM Dependencies:
    - multiparty
    - express
    - cors
    - fs
    - body-parser

## Author

[github](https://github.com/erick-sudo)

## License
MIT License Erick Obuya 2023
