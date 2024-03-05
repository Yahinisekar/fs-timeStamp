# Timestamp File API

This project provides an API for creating and reading timestamped text files.

## Installation

1. Clone the repository:

```
git clone https://github.com/Yahinisekar/fs-timeStamp
cd fs-timeStamp
```
The server will start running on port 4000 by default.

## Endpoints
- Write Endpoint
- Creates a timestamped text file with the current date and time as its content.
  
  ## Endpoint: `/getfiles`
`Method`: GET
`Response`: The timestamped text files are displayed in the browser.


## Endpoint: /write
`Method`: GET
`Response`: A timestamped text file is created in the timeStamp directory. The response is an HTML page with the timestamp displayed.
## Read Endpoint
- Reads the content of the timestamped text file created by the /write endpoint.

## Endpoint: /read
`Method`: GET
`Response`: The content of the timestamped text file is displayed in an HTML page.
## Usage
- Access the /write endpoint to create a timestamped text file.
- Access the /read endpoint to view the content of the created text file.
## Dependencies
`express`: Fast, unopinionated, minimalist web framework for Node.js.
`date-fns`: Modern JavaScript date utility library.
