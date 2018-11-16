<?php
/**
 * WordPress Mix
 *
 * @package     WordPress Mix
 * @author      Ben Furfie <hello@benfurfie.co.uk>
 * @copyright   2018 Ben Furfie
 * @license     MIT
 *
 * @wordpress-plugin
 * Plugin Name: WordPress Mix
 * Plugin URI:  https://www.benfurfie.co.uk/plugins
 * Description: A setup for using Laravel Mix with WordPress
 * Version:     1.0.0
 * Author:      Ben Furfie
 * Author URI:  https://www.benfurfie.co.uk/
 * Text Domain: wp-mix
 * License:     MIT
 */

function mix($type, $src = 'app', $outputTag = true)
{
  /**
   * Define where the manifest file is.
   */
  $manifestFile = get_stylesheet_directory() . '/mix-manifest.json';

  /**
   * Build the key as $path based on the type of file we're after
   * and the name of the file. Defaults to app.
   */
  $path = '/' . $type . '/' . $src . '.' . $type;

  /**
   * Grab the manifest file and decode it from json into an
   * associative array.
   */
  $manifest = json_decode(file_get_contents($manifestFile), true);
  
  $assetPath = $manifest[$path];

  $themePath = get_stylesheet_directory_uri();

  $fullAssetPath = $themePath . $assetPath;

  /**
   * Return the manifest value for the selected file type with its
   * cache busting string.
   */
  if($outputTag && $type == 'css')
  {
    echo '<link id="mix-css" rel="stylesheet" href="' . $fullAssetPath . '" type="text/css" media="all">';
  } elseif($outputTag && $type == 'js')
  {
    echo '<script src="' . $fullAssetPath . '">';
  } else
  {
    echo $fullAssetPath;
  }
}
