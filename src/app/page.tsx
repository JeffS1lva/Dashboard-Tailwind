import { SettingsTabs } from '@/components/SettingsTabs';
import * as Input from '../components/Input'
import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react';
import * as FileInput from '@/components/Form/Fileinput'
import { Select } from '@/components/Form/Select';
import { SelectItem } from '@/components/Form/Select/SelectItem';
import { Textarea } from '@/components/Form/Textarea';
import { Button } from '@/components/Button';

export default function Home() {
  return (
    <>
     <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">Settings</h1>
     
     <SettingsTabs />

     <div className='mt-6 flex flex-col '>
      <div className='flex flex-col gap-4 lg:flex-row lg:items-center justify-between pb-5 border-b border-zinc-200 dark:border-zinc-700'>
        <div className='space-y-1'>
          <h2 className='text-lg font-medium text-zinc-900 dark:text-zinc-100'>Personal info</h2>
          <span className='text-sm text-zinc-500 dark:text-zinc-400'>
            Update your photo and personal details here.
          </span>
        </div>
        <div className='flex items-center gap-2'>
          <Button variant='outline' type='button' >
            Cancel
          </Button>

          <Button 
          variant='primary'
          type='submit' 
          form='settings' 
          >
            Save
          </Button>
        </div>
      </div>

      <form id='settings' className='mt-6 flex flex-col w-full gap-5 divide-y divide-zinc-200 dark:divide-zinc-700'>
         <div className='flex flex-col gap-3 lg:grid lg:grid-cols-form'>
           <label 
             htmlFor="firstName" 
             className='text-sm font-medium text-zinc-700 dark:text-zinc-300 '>
             Name
           </label>
           <div className='flex flex-col lg:grid gap-6 lg:grid-cols-2'>
              <Input.InputRoot>
                <Input.InputControl defaultValue='Jefferson' />
              </Input.InputRoot>
             <div className='flex flex-col gap-3 lg:block'>
                <label 
                  htmlFor="lastName" 
                  className='text-sm font-medium text-zinc-700 lg:sr-only'>
                  Last name
                </label>

                <Input.InputRoot>
                  <Input.InputControl id='lastName' defaultValue='Silva' />
                </Input.InputRoot>
              </div>
           </div>
         </div>

         <div className='flex flex-col gap-3 lg:grid lg:grid-cols-form pt-5'>
           <label 
             htmlFor="email" 
             className='text-sm font-medium text-zinc-700 dark:text-zinc-300'>
             Email adress
           </label>    
            <Input.InputRoot>
              <Input.InputPrefix>
                <Mail className='h-5 w-5 text-zinc-500' />
              </Input.InputPrefix>
              <Input.InputControl id='email' type='email' defaultValue='example@.com.br' />
            </Input.InputRoot>
         </div>

         <div className='flex flex-col gap-3 lg:grid lg:grid-cols-form pt-5'>
           <label 
             htmlFor="photo" 
             className='group text-sm font-medium text-zinc-700 dark:text-zinc-300'>
             Your photo
             <span className='text-sm font-normal texxt-zinc-500 block mt-0.5'>This will be displayed on your profile</span>
           </label>    
            < FileInput.Root className='flex flex-col lg:flex-row  lg:items-start gap-5' >
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
         </div>

         <div className='flex flex-col gap-3 lg:grid lg:grid-cols-form pt-5 '>
           <label 
             htmlFor="role" 
             className='text-sm font-medium text-zinc-700 dark:text-zinc-300'>
             Role
           </label>    
            <Input.InputRoot>
              <Input.InputPrefix>
                <Mail className='h-5 w-5 text-zinc-500' />
              </Input.InputPrefix>
              <Input.InputControl 
              id='role'  
              defaultValue='CTO' />
            </Input.InputRoot>
         </div>

         <div className='flex flex-col gap-3 lg:grid lg:grid-cols-form pt-5 '>
           <label 
             htmlFor="country" 
             className='text-sm font-medium text-zinc-700 dark:text-zinc-300'>
             Country
           </label>    
            <Select placeholder='Select a country'>
              <SelectItem value='br' text= 'Brazil' />
              <SelectItem value='us' text= 'United States' />
            </Select>
         </div>

         <div className='flex flex-col gap-3 lg:grid lg:grid-cols-form pt-5 '>
           <label 
             htmlFor="timezone" 
             className='text-sm font-medium text-zinc-700 dark:text-zinc-300'>
             Timezone
           </label>    
            <Select placeholder='Select a timezone'>
              <SelectItem value='utc8' text= 'Pacific Standard  Time (UTC-08:00)' />
              <SelectItem value='utc9' text= 'America São Paulo (UTC-03:00)' />
            </Select>
         </div>

         <div className='flex flex-col gap-3 lg:grid lg:grid-cols-form pt-5 '>
           <label 
             htmlFor="bio" 
             className='text-sm font-medium text-zinc-700 dark:text-zinc-300'>
             Bio
             <span className='text-sm font-normal texxt-zinc-500 block mt-0.5'>Write a short introduction.</span>
           </label>    
            <div className='space-y-3'>
              <div className='flex flex-col lg:grid gap-3 lg:grid-cols-2'>
               <Select placeholder='' defaultValue='normal'>
                 <SelectItem value='normal' defaultChecked text= 'Normal Text' />
                 <SelectItem value='md' text= 'Markdown' />
               </Select>

               <div className='flex items-center gap-1'>
                 <Button type="button" variant='ghost'>
                   <Bold className="w-4 h-4 text-zinc-500" strokeWidth={3} />
                 </Button>
                 <Button type="button" variant='ghost'>
                   <Italic className="w-4 h-4 text-zinc-500" strokeWidth={3} />
                 </Button>
                 <Button type="button" variant='ghost'>
                   <Link className="w-4 h-4 text-zinc-500" strokeWidth={3} />
                 </Button>
                 <Button type="button" variant='ghost'>
                   <List className="w-4 h-4 text-zinc-500" strokeWidth={3} />
                 </Button>
                 <Button type="button" variant='ghost'>
                   <ListOrdered className="w-4 h-4 text-zinc-500" strokeWidth={3} />
                 </Button>
               </div>
              </div>
             <Textarea id='bio' 
              defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."  />
            </div>
         </div>

         <div className='flex flex-col gap-3 lg:grid lg:grid-cols-form pt-5 '>
           <label 
             htmlFor="projects" 
             className='text-sm font-medium text-zinc-700 dark:text-zinc-300'>
             Portfolio projects
             <span className='text-sm font-normal texxt-zinc-500 block mt-0.5'>Share a few snippets of your work.</span>
           </label>    
           <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Control multiple/>
           </FileInput.Root>
         </div>

         <div className='flex items-center justify-end gap-2 pt-5'>
            <Button variant='outline' type='button' >
              Cancel
            </Button>

            <Button 
             variant='primary'
             type='submit' 
             form='settings' 
             >
               Save
            </Button>
         </div>
      </form>
     </div>
    </>
  );
}
