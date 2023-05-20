from http.server import BaseHTTPRequestHandler
import json
 
class handler(BaseHTTPRequestHandler):
 
    def do_GET(self):
        self.send_response(200)
        """ self.send_header('Content-type','text/plain') """
        self.send_header('Content-Type', 'application/json')
        self.end_headers()
        """ self.wfile.write('Hello, world!'.encode('utf-8')) """

        json_string = json.dumps({'hello': 'world', 'received': 'ok', 'tunniplaan': 4})

        """ self.wfile.write(json_string.encode(encoding='utf_8')) """
        self.wfile.write(bytes(json.dumps(json_string, ensure_ascii=False), 'utf-8'))
        return