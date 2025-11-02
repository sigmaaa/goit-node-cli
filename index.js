import { program } from "commander";
import { listContacts, addContact, getContactById, removeContact } from "./src/contacts.js";

program
    .option("-a, --action <type>")
    .option("-i, --id <id>")
    .option("-n, --name <name>")
    .option("-e, --email <email>")
    .option("-p, --phone <phone>");

program.parse(process.argv);

const opts = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
    switch (action) {
        case "list":
            return console.table(await listContacts());

        case "add":
            return console.log(await addContact(name, email, phone));

        case "remove":
            return console.log(await removeContact(id));

        case "get":
            return console.log(await getContactById(id));

        default:
            console.warn("unknown action");
    }
}

invokeAction(opts);
