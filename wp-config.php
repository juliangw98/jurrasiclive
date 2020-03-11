<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'jurassic' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '4V_z^S/(ovgj(%.s/udbgYoh[T^bf|G};al9SXwo<wG_=7gwNt<=zO0,[.67X29B' );
define( 'SECURE_AUTH_KEY',  ';5fP<YDro%q2bh|+SvR?1xi%7KV}CKE.;_VzR0b]JWc`#7D$q@U&dp)]FaF,>>#N' );
define( 'LOGGED_IN_KEY',    '7ItLw3(NxjE^!V]8nJWq0I2m}wkgf^fp4F-uJ_m)L;]7C!kT=vlpFNwmK+s%iN I' );
define( 'NONCE_KEY',        'uUHR-d^<$hp(~z)3+lc^EC(d<So!xU%6.B(=qwz4LZT56j~t[>M$1zdi>i8Vq=BM' );
define( 'AUTH_SALT',        '6|9k]i`h*U CW4V,9mo8c9j u$;SR0^QV(xu&HRUYkxvW6R/z<(i-2$B~}j#2Cag' );
define( 'SECURE_AUTH_SALT', '$tn^@$Y$os7%_6<j./.X75^U8uW6m+*kqN@=%(!,00hBOCkmWd:C,37e7{Egh@0v' );
define( 'LOGGED_IN_SALT',   'oJo@r22e{p,[CZuVl]2q8#$2/R=ri5NQ*h3p&PyWH[wg@.VZA(3GP@eK;vRTO[DB' );
define( 'NONCE_SALT',       '3O@Wv;yVu)Vo_(lSw Nk2kng%WEt: 9T$OwBydaTOc}G#!C`0&V[/3<lgJPR/CU&' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
