export async function getData(path) {
  const res = await fetch(path);
  if (!res.ok) throw new Error(`${res.status}- ${res.statusText}`);
  const data = await res.json();
  return data;
}
