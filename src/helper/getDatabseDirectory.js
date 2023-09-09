import path from "path";

function getDatabaseDirectory(folderName = "", databasName = "") {
  const formDatabase = path.join(
    process.cwd(),
    "src",
    "database",
    folderName,
    databasName
  );
  return formDatabase;
}

export default getDatabaseDirectory;
