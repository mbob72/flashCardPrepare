export const receiveMessage = (resolvePromise) => (event) =>
{
  try {
    const { type, data } = JSON.parse(event.data)
    if(type === 'answer') {
      resolvePromise(data)
    }
  } catch(e) { console.log(e)}
}
