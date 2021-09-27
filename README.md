## Adding new components

### Command Line
1. Use `bit --help` when in doubt
2. Create a directory under /components for a new component
3. Place there component source code
4. Npm install any package that is required by your component
5. Install Bit CLI if you haven't previously `npm install bit-bin -g`
6. Authenticate Bit to your bit.dev account if you haven't previously `bit login`
7. Make sure that you have properly added all of the files required for the component. `bit status`
8. Add directory to be tracked by bit. Bit will create a component named after the directory name. `bit add src/components/<component-name>`
10. Tag a component with current version `bit tag --all 1.0.0` it will also build it
11. You can run `bit status` once again to verify that a component is considered as staged
12. Export the component to a collection `bit export soldevelo-omrs.cfl-components`

### Other
1. Go to bit.dev
2. Find your component in collection
3. Add proper description explaining how to use your component, describe props etc.
4. Optionally add Component Example in Overview tab

## Updating existing component
1. Run `bit status` to verify that your changes are tracked
2. Tag a component with a new version `bit tag --all 1.0.1`
3. You can run `bit status` once again to verify that a component is considered as staged
4. Export the component to a collection `bit export soldevelo-omrs.cfl-components`
5. Update it in other cfl modules

## Usage
run `npm i @bit/soldevelo-omrs.cfl-components.<component-name>` to install your component, then import them like any other dependency
