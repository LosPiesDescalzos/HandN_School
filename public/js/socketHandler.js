const socket = io(window.location.origin);

const createToaster = (answer) => {
  toastr.options.closeButton = true;
  toastr.options.positionClass = 'toast-absolute toast-top-left';
  toastr['info'](
    `Product ${answer.id} was added just now`,
    'New Product',
  );
};

socket.on('newProduct', (answer) => {
  createToaster(answer);
});