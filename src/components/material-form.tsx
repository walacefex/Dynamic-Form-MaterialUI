import React from 'react'
import { TextField, Typography, Grid } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab';
const data = {
  "form": {
    "sections": [
      {
        "section_title": "Material UI Form using Json",
        "fields": [
          {
            "name": "name",
            "label": "Name",
            "required": true,
            "hidden": true,
            "data_type": "text",
            "html_element": "TextField",
            "error": false,
            "variant": "outlined"
          },
          {
            "name": "email",
            "label": "Email",
            "hidden": false,
            "required": true,
            "data_type": "email",
            "html_element": "TextField",
            "error": false,
            "variant": "outlined"
          },
          {
            "name": "age",
            "label": "Age",
            "hidden": false,
            "required": true,
            "data_type": "number",
            "html_element": "TextField",
            "error": false,

          },
          {
            "name": "phone",
            "label": "Phone",
            "hidden": true,
            "required": true,
            "data_type": "number",
            "html_element": "TextField",
            "error": false,
            "variant": "outlined"
          },
          {
            "name": "address",
            "label": "Address",
            "minRows": "3",
            "hidden": true,
            "placeholder": "Enter Address",
            "html_element": "TextArea",
            "rows": "4",
            "data_type": "text",
          },
          {
            "name": "country",
            "label": "Country",
            "hidden": false,
            "required": true,
            "data_type": "Image",
            "html_element": "Select",
            "error": false,
            "options": [
              {
                "label": "Brazil",
                "value": "brazil"
              },
              {
                "label": "Canada",
                "value": "canada",
              },
              {
                "label": "New Zealand",
                "value": "New Zealand"
              }
            ],
          },

        ]
      }
    ]
  }
}
export default function MaterialForm() {
  return (
    <form>
      {
        data.form.sections.map((item) => {
          return (
            <Grid key={item.section_title}>
              <Grid item xs={12} sm={12}>
                <Typography variant='h3'>{item.section_title}</Typography>
              </Grid>
              {
                item.fields.map(data => {
                  return (
                    <Grid item xs={12} sm={6} key={data.name}>
                      {
                        data.html_element === "TextField" ?
                        <TextField variant="outlined" label={data.label} required={data.required}  name={data.name} fullWidth type={data.data_type} /> 
                        : data.html_element === "TextArea" ?
                        <TextField multiline variant="outlined" rows={data.rows} label={data.label} required={data.required} name={data.name} fullWidth />
                        : data.html_element === "Select" ?
                        <Autocomplete
                          id="combo-box-demo"
                          options={data.options}
                          getOptionLabel={(option) => option.label}
                          style={{ width: 300 }}
                          renderInput={(params) => <TextField {...params} label={data.label} variant="outlined" />}
                        />
                        : ''
                      }
                   
                    </Grid>
                  )
                })
              }
            </Grid>
          )
        })
      }
    </form>
  )
}