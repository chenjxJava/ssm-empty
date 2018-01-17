//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by Fernflower decompiler)
//

package org.springframework.scheduling.quartz;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.quartz.JobDataMap;
import org.quartz.JobDetail;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.quartz.StatefulJob;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.BeanWrapper;
import org.springframework.beans.PropertyAccessorFactory;
import org.springframework.beans.factory.BeanClassLoaderAware;
import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.BeanFactoryAware;
import org.springframework.beans.factory.BeanNameAware;
import org.springframework.beans.factory.FactoryBean;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.support.ArgumentConvertingMethodInvoker;
import org.springframework.util.Assert;
import org.springframework.util.ClassUtils;
import org.springframework.util.MethodInvoker;
import org.springframework.util.ReflectionUtils;

public class MethodInvokingJobDetailFactoryBean extends ArgumentConvertingMethodInvoker implements FactoryBean<JobDetail>, BeanNameAware, BeanClassLoaderAware, BeanFactoryAware, InitializingBean {
    private static Class<?> jobDetailImplClass;
    private static Method setResultMethod;
    private String name;
    private String group = "DEFAULT";
    private boolean concurrent = true;
    private String targetBeanName;
    private String[] jobListenerNames;
    private String beanName;
    private ClassLoader beanClassLoader = ClassUtils.getDefaultClassLoader();
    private BeanFactory beanFactory;
    private JobDetail jobDetail;

    public MethodInvokingJobDetailFactoryBean() {
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setGroup(String group) {
        this.group = group;
    }

    public void setConcurrent(boolean concurrent) {
        this.concurrent = concurrent;
    }

    public void setTargetBeanName(String targetBeanName) {
        this.targetBeanName = targetBeanName;
    }

    /** @deprecated */
    @Deprecated
    public void setJobListenerNames(String... names) {
        this.jobListenerNames = names;
    }

    public void setBeanName(String beanName) {
        this.beanName = beanName;
    }

    public void setBeanClassLoader(ClassLoader classLoader) {
        this.beanClassLoader = classLoader;
    }

    public void setBeanFactory(BeanFactory beanFactory) {
        this.beanFactory = beanFactory;
    }

    protected Class<?> resolveClassName(String className) throws ClassNotFoundException {
        return ClassUtils.forName(className, this.beanClassLoader);
    }

    public void afterPropertiesSet() throws ClassNotFoundException, NoSuchMethodException {
        this.prepare();
        String name = this.name != null?this.name:this.beanName;
        Class jobClass = this.concurrent? org.springframework.scheduling.quartz.MethodInvokingJobDetailFactoryBean.MethodInvokingJob.class: org.springframework.scheduling.quartz.MethodInvokingJobDetailFactoryBean.StatefulMethodInvokingJob.class;
        if(jobDetailImplClass != null) {
            this.jobDetail = (JobDetail) BeanUtils.instantiate(jobDetailImplClass);
            BeanWrapper bw = PropertyAccessorFactory.forBeanPropertyAccess(this.jobDetail);
            bw.setPropertyValue("name", name);
            bw.setPropertyValue("group", this.group);
            bw.setPropertyValue("jobClass", jobClass);
            bw.setPropertyValue("durability", Boolean.valueOf(true));
            ((JobDataMap)bw.getPropertyValue("jobDataMap")).put("methodInvoker", this);
        } else {
            this.jobDetail = new JobDetail(name, this.group, jobClass);
            this.jobDetail.setVolatility(true);
            this.jobDetail.setDurability(true);
            this.jobDetail.getJobDataMap().put("methodInvoker", this);
        }

        if(this.jobListenerNames != null) {
            String[] var7 = this.jobListenerNames;
            int var4 = var7.length;

            for(int var5 = 0; var5 < var4; ++var5) {
                String jobListenerName = var7[var5];
                if(jobDetailImplClass != null) {
                    throw new IllegalStateException("Non-global JobListeners not supported on Quartz 2 - manually register a Matcher against the Quartz ListenerManager instead");
                }

                this.jobDetail.addJobListener(jobListenerName);
            }
        }

        this.postProcessJobDetail(this.jobDetail);
    }

    protected void postProcessJobDetail(JobDetail jobDetail) {
    }

    public Class<?> getTargetClass() {
        Class targetClass = super.getTargetClass();
        if(targetClass == null && this.targetBeanName != null) {
            Assert.state(this.beanFactory != null, "BeanFactory must be set when using \'targetBeanName\'");
            targetClass = this.beanFactory.getType(this.targetBeanName);
        }

        return targetClass;
    }

    public Object getTargetObject() {
        Object targetObject = super.getTargetObject();
        if(targetObject == null && this.targetBeanName != null) {
            Assert.state(this.beanFactory != null, "BeanFactory must be set when using \'targetBeanName\'");
            targetObject = this.beanFactory.getBean(this.targetBeanName);
        }

        return targetObject;
    }

    public JobDetail getObject() {
        return this.jobDetail;
    }

    public Class<? extends JobDetail> getObjectType() {
        return this.jobDetail != null?this.jobDetail.getClass():JobDetail.class;
    }

    public boolean isSingleton() {
        return true;
    }

    static {
        try {
            jobDetailImplClass = Class.forName("org.quartz.impl.JobDetailImpl");
        } catch (ClassNotFoundException var2) {
            jobDetailImplClass = null;
        }

        try {
            Class ex = QuartzJobBean.class.getClassLoader().loadClass("org.quartz.JobExecutionContext");
            setResultMethod = ex.getMethod("setResult", new Class[]{Object.class});
        } catch (Exception var1) {
            throw new IllegalStateException("Incompatible Quartz API: " + var1);
        }
    }

    public static class StatefulMethodInvokingJob extends org.springframework.scheduling.quartz.MethodInvokingJobDetailFactoryBean.MethodInvokingJob implements StatefulJob {
        public StatefulMethodInvokingJob() {
        }
    }

    public static class MethodInvokingJob extends QuartzJobBean {
        protected static final Log logger = LogFactory.getLog(org.springframework.scheduling.quartz.MethodInvokingJobDetailFactoryBean.MethodInvokingJob.class);
        private MethodInvoker methodInvoker;

        public MethodInvokingJob() {
        }

        public void setMethodInvoker(MethodInvoker methodInvoker) {
            this.methodInvoker = methodInvoker;
        }

        protected void executeInternal(JobExecutionContext context) throws JobExecutionException {
            try {
               /* if("1".equals(System.getProperty("env.quartz_server"))) {
                    System.out.println("quartz runs on server 1, proceed");
                } else {
                    System.out.println("quartz will not run except on server 1, discard");
                    return;
                }*/
                System.out.println("quartz runs on server 1, proceed");
                ReflectionUtils.invokeMethod(setResultMethod, context, new Object[]{this.methodInvoker.invoke()});
            } catch (InvocationTargetException var3) {
                if(var3.getTargetException() instanceof JobExecutionException) {
                    throw (JobExecutionException)var3.getTargetException();
                } else {
                    throw new JobMethodInvocationFailedException(this.methodInvoker, var3.getTargetException());
                }
            } catch (Exception var4) {
                throw new JobMethodInvocationFailedException(this.methodInvoker, var4);
            }
        }
    }
}
