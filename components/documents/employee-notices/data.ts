export interface EmployeeNotice {
  id: string;
  title: string;
  recipient: {
    name: string;
    email: string;
    avatar: string;
  };
  dateSent: string;
  status: "Read" | "Unread";
}

export const mockNotices: EmployeeNotice[] = [
  {
    id: "1",
    title: "Performance Review Required",
    recipient: {
      name: "Jane Doe",
      email: "jane@example.com",
      avatar: "https://i.pravatar.cc/150?u=jane",
    },
    dateSent: "06/15/2025",
    status: "Read",
  },
  {
    id: "2",
    title: "Schedule Change Notice",
    recipient: {
      name: "John Smith",
      email: "john@example.com",
      avatar: "https://i.pravatar.cc/150?u=john",
    },
    dateSent: "06/15/2025",
    status: "Unread",
  },
  {
    id: "3",
    title: "Holiday Policy Update",
    recipient: {
      name: "Alice Johnson",
      email: "alice@example.com",
      avatar: "https://i.pravatar.cc/150?u=alice",
    },
    dateSent: "06/12/2025",
    status: "Read",
  },
  {
    id: "4",
    title: "New Health and Safety Guidelines",
    recipient: {
      name: "Bob Williams",
      email: "bob@example.com",
      avatar: "https://i.pravatar.cc/150?u=bob",
    },
    dateSent: "06/10/2025",
    status: "Read",
  },
  {
    id: "5",
    title: "Quarterly Townhall Meeting",
    recipient: {
      name: "Charlie Brown",
      email: "charlie@example.com",
      avatar: "https://i.pravatar.cc/150?u=charlie",
    },
    dateSent: "06/05/2025",
    status: "Unread",
  },
  {
    id: "6",
    title: "Employee Benefits Enrollment",
    recipient: {
      name: "Diana Prince",
      email: "diana@example.com",
      avatar: "https://i.pravatar.cc/150?u=diana",
    },
    dateSent: "06/01/2025",
    status: "Read",
  },
  {
    id: "7",
    title: "IT Security Training Reminder",
    recipient: {
      name: "Ethan Hunt",
      email: "ethan@example.com",
      avatar: "https://i.pravatar.cc/150?u=ethan",
    },
    dateSent: "05/28/2025",
    status: "Unread",
  },
];

export const employeeOptions = [
  "Jane Doe",
  "John Smith",
  "Alice Johnson",
  "Bob Williams",
  "Charlie Brown",
  "Diana Prince",
  "Ethan Hunt",
];
