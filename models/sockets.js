

class Sockets {

    constructor( io ) {

        this.io = io;

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {

            // Escuchar evento: mensaje-to-server
            socket.on('mensaje-to-server', ( data ) => {
                console.log( 'server:', data );
                this.io.emit('mensaje-from-server', {...data, msg: `${data.msg} mundo`} );
            });
            
        
        });
    }


}


module.exports = Sockets;