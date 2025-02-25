declare function handleRequest(url: string, method: "GET" | "POST"): void;
 
//const req = { url: "https://example.com", method: "GET" };
//handleRequest(req.url, req.method); 

//req.method is inferred to be string, not "GET"
//Because code can be evaluated between the creation of req and the 
// call of handleRequest which could assign a new string like "GUESS" to req.method

//Way 1: Use type assertion

// Change 1:
// const req = { url: "https://example.com", method: "GET" as "GET" };
// Change 2
// handleRequest(req.url, req.method as "GET");

//Way 2: Use const assertion

const req = { url: "https://example.com", method: "GET" } as const;
handleRequest(req.url, req.method);