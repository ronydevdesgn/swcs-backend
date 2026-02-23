
// Ensure this runs before anything else - use separate test database
if (process.env.TEST_DATABASE_URL) {
  process.env.DATABASE_URL = process.env.TEST_DATABASE_URL;
} else if (process.env.DATABASE_URL) {
  // If no TEST_DATABASE_URL is set, append _test to the database name
  const url = new URL(process.env.DATABASE_URL);
  const pathParts = url.pathname.split('/');
  const dbName = pathParts[pathParts.length - 1];
  pathParts[pathParts.length - 1] = `${dbName}_test`;
  url.pathname = pathParts.join('/');
  process.env.DATABASE_URL = url.toString();
}

// Add connection limit for parallel test execution
if (process.env.DATABASE_URL && !process.env.DATABASE_URL.includes("connection_limit")) {
  const separator = process.env.DATABASE_URL.includes("?") ? "&" : "?";
  process.env.DATABASE_URL = `${process.env.DATABASE_URL}${separator}connection_limit=2`;
}
