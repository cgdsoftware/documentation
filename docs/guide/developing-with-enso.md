# Developing with Enso

This is a work in progress section, please feel free to both contribute and 
make suggestions about new topics.

Topics:
* Enso conventions
* Building CRUD files
* Overwriting Enso functionality
* Creating new themes

::: tip Recommended
No matter the topic, please also go through the related packages' documentation
for a more in-depth understanding of the available functionality.
:::

## Enso conventions

### Named routes

Enso exclusively uses named routes and it is important to set names for the routes you may add since 
the named routes are tied in with the permission system.

### Invocable controllers

We're currently using invocable controllers for all our actions. While this is not a must and this choice
is not tied to other core functionality, keep in mind that if using the CLI for resource files generation,
the generated files WILL follow this convention.

### Fat models, slim controllers

In time, we've transitioned to this style as it matches our beliefs and is also a style recommended by Taylor Otwell.
You may read more [here](https://laraveldaily.com/taylor-otwell-thin-controllers-fat-models-approach/) 

## Building CRUD files

No matter how complex the application ends up, you'll still have the need to have
some CRUD pages.

Because of the modularity of Enso, when creating such pages, there are several packages 
involved, each with their own templates, controllers and routes.

Also, because Enso is meant to be a SPA, you need front-end routes in addition to the 
pages themselves.

In order to simplify and streamline the process of adding CRUD pages, 
we've created the CLI package and command.

You can use the CLI command to create:
- a model
- a permission group
- the common Enso permissions
- a menu
- the required files, such as:
    - database migrations
    - controllers
    - back-end routes
    - request validations
    - form templates and builders
    - table templates 
    - front-end pages
    - front-end routes
    
Note that these are meant to provide you with a starting point, 
as you'll still need to customize and tweak some of the resulted files. 

::: tip Customizing
Note that if you already created some of the files, 
such as a model and a migration, you can configure and choose what you want
the cli to create for you, skipping what you don't need.
:::

::: tip Starting clean
If you're just starting to use the cli, 
it is recommended to do so on a clean project state, after you've configured/initialized git,
and you've committed your other changes, as once the files are generated, 
you'll be able to use `git status` to see a list of changes. 
:::

### Using the CLI

To get started, open a terminal window in the root of your project and type:
```shell
php artisan enso:cli
```

You'll be greeted with a list of options:
```shell
Create a new Laravel Enso Structure

Current configuration status:
Model ✗
Permission Group ✗
Permissions ✗
Menu ✗
Files ✗

 Choose element to configure:
  [0] Model
  [1] Permission Group
  [2] Permissions
  [3] Menu
  [4] Files
  [5] Generate
  [6] Validation
 > 
```

You can tell that the options are yet to be configured. 
It's best to follow the order in which they are given.

::: tip Jumping ahead
If you jump ahead or miss some of the required options, 
you'll receive a warning.  
:::

For each option, you'll be first asked to confirm that you want to
 configure it.

::: tip Feedback
Once you've configured an option you'll be given feedback regarding the 
configuration status of the main options as well as what will be generated 
as a result of your choices.
:::

::: tip Making changes
Once you've configured an option, before generating the files,
 you can go back and re-configure any of the options. 
:::

::: tip Autocomplete
When making changes to an already configured option, you can 
type the first character and have the cli autocomplete the previously set value
so you can advance faster through the options. 
:::


#### Configuring the model

After confirming you want to configure the model, you'll want to input
its name.

If you enter a non namespaced name, by convention, the model will be placed
in your `projectRoot/App` folder.

```shell
Model configuration:
name => 

 Configure Model (yes/no) [no]:
 > y

 name:
 > Car

Current configuration status:
Model ✓
Permission Group ✗
Permissions ✗
Menu ✗
Files ✗

Will generate:
structure migration
```

You may also input a namespaced name, in which case, the model will be placed 
in the proper folder.

::: tip Namespace
If you are inputting a namespaced model, please type the full namespace, including `App`,
and use double backslashes. 
:::

```shell
Model configuration:
name => Car

 Configure Model (yes/no) [no]:
 > y

 name:
 > App\\Vehicles\\Motorized\\Car
```


#### Configuring the permission group

For the permission group, you'll want to use a name style similar to naming routes.

Also, by convention use the *plural* name for resources.  

```shell
Permission Group configuration:
name => 

 Configure Permission Group (yes/no) [no]:
 > y

 name:
 > vehicles.motorized.cars

Current configuration status:
Model ✓
Permission Group ✓
Permissions ✗
Menu ✗
Files ✗

Will generate:
structure migration
```

#### Configuring the permissions

Simply choose the desired permissions for the list:
* `index` is used for the index page, where you'll see a list of resources in a data table
* `create` is used to display the creation form for your resource
* `store` is used to persist a new resource and is utilized by the form's save action
* `edit` is used to display the edit form for an existing resource
* `update` is used to update an existing resource and is utilized by the form's update action
* `destroy` is used to delete a resource and is utilized by default by the form's and tables's delete actions
* `show` is used for the show page
* `initTable` is used for the initialization of the index page's table
* `tableData` is used for fetching the data for the index page's table  
* `exportExcel` is used for exporting the information for the the index page's table
* `options` is used for fetching a list of options for the resources, utilized by a 
server-side Select component

```shell
Permissions configuration:
index => ✗
create => ✗
store => ✗
show => ✗
edit => ✗
update => ✗
destroy => ✗
initTable => ✗
tableData => ✗
exportExcel => ✗
options => ✗

 Configure Permissions (yes/no) [no]:
 > y

 index (yes/no) [no]:
 > y

 create (yes/no) [no]:
 > y

 store (yes/no) [no]:
 > y

 show (yes/no) [no]:
 > y

 edit (yes/no) [no]:
 > y

 update (yes/no) [no]:
 > y

 destroy (yes/no) [no]:
 > y

 initTable (yes/no) [no]:
 > y

 tableData (yes/no) [no]:
 > y

 exportExcel (yes/no) [no]:
 > y

 options (yes/no) [no]:
 > y

Current configuration status:
Model ✓
Permission Group ✓
Permissions ✓
Menu ✗
Files ✗

Will generate:
structure migration

```

#### Configuring the menu

The menu will need a few items:
- the name is a string and can be anything
- the icon must be a font awesome icon and will need to imported in your project
- the parent menu is the name of the parent menu. 
    If given, the parent menu must exist and
    the name must match. 
     
    If you don't give a parent menu, the new menu will be added at the root level.
- the route shall be the route that gets used when the user clicks on the menu.

    ::: tip Permissions
    If a user does not have access to the given route, that menu will not be visible.
    :::
- the order index is used to sort menus of the same level and should be an integer
- the has_children flag is used to mark a menu as a parent. 

    Parent menus should not have a route and clicking on such a menu will expand it.    


```shell
Menu configuration:
name => 
icon => 
parentMenu => 
route => 
order_index => 999
has_children => ✗

 Configure Menu (yes/no) [no]:
 > y

 name:
 > Cars

 icon:
 > list

 parentMenu:
 > Motorized

 route:
 > vehicles.motorized.cars.index

 order_index:
 > 1

 has_children (yes/no) [no]:
 > n

Current configuration status:
Model ✓
Permission Group ✓
Permissions ✓
Menu ✓
Files ✗

Will generate:
structure migration

```


#### Configuring the files

Once everything else is configured, you may choose what files you want to have
generated for you.

Note that the options are interdepenent, so, for instance, even if you choose the 
`routes` option, the generated routes will match the permissions you chose at the 3rd step.

```shell
Files configuration:
model => ✗
migration => ✗
routes => ✗
views => ✗
form => ✗
table => ✗
options => ✗

 Configure Files (yes/no) [no]:
 > y

 model (yes/no) [no]:
 > y

 migration (yes/no) [no]:
 > y

 routes (yes/no) [no]:
 > y

 views (yes/no) [no]:
 > y

 form (yes/no) [no]:
 > y

 table (yes/no) [no]:
 > y

 options (yes/no) [no]:
 > y

Current configuration status:
Model ✓
Permission Group ✓
Permissions ✓
Menu ✓
Files ✓

Will generate:
structure migration
model
migration
routes
views
form
table
options
```

#### Generating the files

Once your options are configured, you may generate the corresponding files.

While files are generated for you in their proper locations, 
the routes are printed in the terminal and you should copy them into your 
`routes/api.php` files.

```shell
 Choose element to configure:
  [0] Model
  [1] Permission Group
  [2] Permissions
  [3] Menu
  [4] Files
  [5] Generate
  [6] Validation
 > 5

Copy and paste the following code into your api.php routes file:

Route::namespace('Vehicles\Motorized\Cars')
    ->prefix('vehicles/motorized/cars')->as('vehicles.motorized.cars.')
    ->group(function () {
        Route::get('', 'Index')->name('index');
        Route::get('create', 'Create')->name('create');
        Route::post('', 'Store')->name('store');
        Route::get('${model}/edit', 'Edit')->name('edit');
        Route::patch('${model}', 'Update')->name('update');
        Route::delete('${model}', 'Destroy')->name('destroy');
        Route::get('initTable', 'Table@init')->name('initTable');
        Route::get('tableData', 'Table@data')->name('tableData');
        Route::get('exportExcel', 'Table@excel')->name('exportExcel');
        Route::get('options', 'Options')->name('options');
        Route::get('${model}', 'Show')->name('show');
});

The new structure is created, you can start playing
```

If you've setup git for the project, you may use `git status` to see a list of 
new files and folders:

```shell
Untracked files:
  (use "git add <file>..." to include in what will be committed)

        app/Forms/
        app/Http/Controllers/Vehicles/
        app/Http/Requests/
        app/Tables/
        app/Vehicles/
        database/migrations/2019_05_27_134825_create_cars_table.php
        database/migrations/2019_05_27_134825_create_structure_for_cars.php
        resources/js/pages/vehicles/
        resources/js/routes/vehicles.js
        resources/js/routes/vehicles/

no changes added to commit (use "git add" and/or "git commit -a")
```

#### Next steps

Since most likely, the options you chose also involve the creation of migrations, 
if necessary, customize your model migration and then run:
```shell
php artisan migrate
```

Then build your front end assets, and refresh the page. You should be able to see the new menu
and navigate to the index page.

Next, depending on your choices, you may need to:
- configure the model (fillable, relationships, etc)
- configure the table builder, by customizing the query
- configure the table template, by adding the required columns
- configure the form template, by adding the sections and fields
- configure the request validation

## Overwriting Enso functionality

### Using dependency injection

One of the cleanest ways of customizing core logic is by extending classes and overwriting the required
attributes and methods.

In order to offer this possibility, we strive to use dependency injection for our class instances
whenever possible. 

This means that when a customization is needed, you can extend the class you want to customize and then
bind your local implementation to the core class, in your application service provider, therefore having the
container use the local implementation instead.

### Changing Enso back end logic

If the modifications you require are more extensive and cannot be resolved via using dependency injection,
the other option is to overwrite the required routes, and point to your local implementation/controllers.   

### Changing Enso front end pages

When you need to customize any of the front end pages supplied with Enso, you generally have two options:
* use [patch-package](https://www.npmjs.com/package/patch-package) to make a patch to the package that contains the page(s) to be modified
* create your local version of the page(s) and overwrite the front end routes so that they point to your page(s) 

::: tip Breaking the build
Once you start messing with the core Enso functionality it is possible that the changes you're making could
break parts of the various Enso core functionality. 

In order to check, you may run the Enso tests locally, by typing into the terminal:
```shell
phpunit
``` 

If the tests fail, you may use the results to identify the issue. When opening issues on github, 
if the tests are failing please let us know as that might speed up the troubleshooting.
:::

## Creating new themes

If you want to use a different theme instead of, or thoroughly customize the themes supplied with Enso, 
you should use as example the default themes, available on the `node_modules/@enso-ui/themes` path.

You may then create local copies of the themes and load them in place of the Enso versions, by editing
`webpack.mix.js` .

The relevant lines are:
```js
.sass('node_modules/@enso-ui/themes/bulma/light.scss', 'public/themes/light/bulma.min.css')
.sass('node_modules/@enso-ui/themes/bulma/dark.scss', 'public/themes/dark/bulma.min.css')
.sass('node_modules/@enso-ui/themes/bulma/light-rtl.scss', 'public/themes-rtl/light/bulma.min.css')
.sass('node_modules/@enso-ui/themes/bulma/dark-rtl.scss', 'public/themes-rtl/dark/bulma.min.css')
```