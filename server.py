# Python 3 server example
from http.server import BaseHTTPRequestHandler, HTTPServer
import time

hostName = "localhost"
serverPort = 8080

class MyServer(BaseHTTPRequestHandler):
    def do_GET(self):
        # Get the file path from the request URL
        file_path = self.path[1:]  # Remove the leading slash

        # Determine the file extension
        file_extension = file_path.split('.')[-1].lower()

        # Set the default content type to plain text
        content_type = "text/plain"

        # Check the file extension and set the appropriate content type
        if file_extension == "html":
            content_type = "text/html"
        elif file_extension == "css":
            content_type = "text/css"
        elif file_extension == "js":
            content_type = "application/javascript"

        # Set the response headers
        self.send_response(200)
        self.send_header("Content-type", "text/html")
        self.end_headers()

        # Read and serve the file content
        try:
            with open(file_path, "rb") as file:
                self.wfile.write(file.read())
        except FileNotFoundError:
            self.send_response(404)
            self.wfile.write(b"File not found")

if __name__ == "__main__":        
    webServer = HTTPServer((hostName, serverPort), MyServer)
    print("Server started http://%s:%s" % (hostName, serverPort))

    try:
        webServer.serve_forever()
    except KeyboardInterrupt:
        pass

    webServer.server_close()
    print("Server stopped.")