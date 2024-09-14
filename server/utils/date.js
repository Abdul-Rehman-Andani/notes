export const date = () => {
  const today = new Date();

  const day = String(today.getDate()).padStart(2, "0");
  const month = today.toLocaleString("en-US", { month: "short" });
  const year = String(today.getFullYear()).slice(-2);

  const formattedDate = `${day} ${month} ${year}`;

  return formattedDate;
};
