/**
*  File Name:       waitrose-product.js
*  Description:     this will be used for front end functionalities.
*/

jQuery( function( $ ) {
    /* this is for email modal box */
    jQuery('.product-email').click(function() {
	jQuery( '.error-msg' ).css( 'display', 'none' );
	jQuery( '.waitrose-email-form input[name=email]' ).removeClass( 'error-class' );
	jQuery( '.waitrose-email-form textarea[name=msg-body]' ).removeClass( 'error-class' );
	var product_id = '';
        product_id = jQuery(this).attr('id').replace( 'product-id-', '' );
        jQuery('#product-bootmodal').modal('show');
	jQuery( '.waitrose-email-form' ).attr( 'id', 'waitrose-email-form-' + product_id );
	jQuery( '.lightbox-send-button' ).attr( 'id', 'submit-email-' + product_id );
	jQuery( '#waitrose-product-id' ).val( product_id );
    });
    
    jQuery('.lightbox-send-button').click( function() {
	jQuery( '.error-msg' ).css( 'display', 'none' );
        var form_id = jQuery( this ).attr( 'id' ).replace( 'submit-email-', 'waitrose-email-form-' );
	var errors = '';
	
        /* this for checking email */
        if( jQuery.trim( jQuery( '#' + form_id + ' input[name=email]' ).val() ) == '' ) {
            errors += "Error: Email is empty.\n";
            jQuery( '.error-email' ).css('display','block');
	    jQuery( '#' + form_id + ' input[name=email]' ).addClass( 'error-class' );
        } else {
            var regex_email = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if(!regex_email.test(jQuery( '#' + form_id + ' input[name=email]' ).val())) {
                errors += "Error: Please enter a valid email.\n";
                jQuery( '.error-validemail' ).css('display','block');
		jQuery( '#' + form_id + ' input[name=email]' ).addClass( 'error-class' );
            }
        }
        /* this for checking phone */
        if( jQuery.trim( jQuery( '#' + form_id + ' textarea[name=msg-body]' ).val() ) == '' ) {
            errors += "Error: Message body is empty.\n";
            jQuery( '.error-body' ).css('display','block');
	    jQuery( '#' + form_id + ' textarea[name=msg-body]' ).addClass( 'error-class' );
        }
        
	
        /* this for checking error */
        if (errors != '') {
          // e.preventDefault();
           //alert(errors);
           return false;
        } else {
	    var form_data = jQuery( '#' + form_id ).serialize();
	    
	    jQuery.ajax({
		
		type: 'POST',
		url: ajax_object.ajaxurl,
		
		data: {
		    action:'waitrose_ajax_request',
		    form_data : form_data  
		},
		success:function(data) {
		    if ( data == 'success' ) {
			alert( 'form data has been submitted to your friend successfully.');
			jQuery('#product-bootmodal').modal('hide');
		    } else if ( data == 'mailerror' ) {
			alert('Due to some reason email could not send to your friend. Try later');
			jQuery('#product-bootmodal').modal('hide');
		    } else {
			alert('Due to some reason email could not send to your friend. Try later');
			jQuery('#product-bootmodal').modal('hide');
		    }
		},
		error: function(){
		    alert('Due to some reason email could not send to your friend. Try later');
		    jQuery('#product-bootmodal').modal('hide');
		}
	    });
	    return true;
        }
    });
});