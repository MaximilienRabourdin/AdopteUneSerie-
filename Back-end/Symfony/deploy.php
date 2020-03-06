<?php
namespace Deployer;

require 'recipe/symfony4.php';

// Project name
set('application', 'adopte_une_serie_api');

// Project repository
set('repository', 'git@github.com:O-clock-Y/projet-adopte-une-serie.git');


// Shared files/dirs between deploys 
add('shared_files', []);
add('shared_dirs', []);

// Writable dirs by web server 
add('writable_dirs', []);
set('allow_anonymous_stats', false);

// Hosts

host('209.182.238.244')
    ->multiplexing(false)
    ->user('adopteuneserie')
    ->identityFile("/home/nicolas/.ssh/id_rsa")
    ->set('deploy_path', '/var/webapps/adopte_une_serie_api/releases/1/Back-end/Symfony');    
    
// Tasks

task('build', function () {
    run('cd {{release_path}} && build');
});

// [Optional] if deploy fails automatically unlock.
after('deploy:failed', 'deploy:unlock');

// Migrate database before symlink new release.

before('deploy:symlink', 'database:migrate');
